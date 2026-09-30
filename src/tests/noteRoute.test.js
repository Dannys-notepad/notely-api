import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const app = require('../app.js');

const basePath = '/api/v1/notes';
let server;
let baseUrl;
const createdIds = new Set();

async function createNote() {
  const response = await fetch(`${baseUrl}${basePath}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Route test note', content: 'Route test content' }),
  });
  const body = await response.json();

  if (body.details?.note?.id) {
    createdIds.add(body.details.note.id);
  }

  return { response, body };
}

describe('note routes', () => {
  beforeAll(async () => {
    server = app.listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
  });

  afterAll(async () => {
    await Promise.all(
      [...createdIds].map((id) =>
        fetch(`${baseUrl}${basePath}/${id}`, { method: 'DELETE' }),
      ),
    );
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  });

  it('serves the application health route', async () => {
    const response = await fetch(`${baseUrl}/`);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: 'OK' });
  });

  it('serves the notes health route', async () => {
    const response = await fetch(`${baseUrl}${basePath}/health`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.details.status).toBe('OK');
  });

  it('creates a note', async () => {
    const { response, body } = await createNote();

    expect(response.status).toBe(201);
    expect(body.message).toBe('Note created successfully');
    expect(body.details.note).toMatchObject({
      title: 'Route test note',
      content: 'Route test content',
    });
  });

  it('rejects an invalid create request', async () => {
    const response = await fetch(`${baseUrl}${basePath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Missing content' }),
    });
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe('Title and content must be non-empty strings');
  });

  it('returns all notes', async () => {
    const { body: created } = await createNote();
    const response = await fetch(`${baseUrl}${basePath}`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.details.notes.some((note) => note.id === created.details.note.id)).toBe(true);
  });

  it('returns a note by id', async () => {
    const { body: created } = await createNote();
    const response = await fetch(`${baseUrl}${basePath}/${created.details.note.id}`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.details.note.id).toBe(created.details.note.id);
  });

  it('returns 404 for an unknown note id', async () => {
    const response = await fetch(`${baseUrl}${basePath}/missing-route-test-note`);
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.message).toBe('Note not found');
  });

  it('updates a note', async () => {
    const { body: created } = await createNote();
    const response = await fetch(`${baseUrl}${basePath}/${created.details.note.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Updated route test note', content: 'Updated content' }),
    });
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe('Note updated successfully');
    expect(body.details.note.title).toBe('Updated route test note');
    expect(body.details.note.content).toBe('Updated content');
  });

  it('rejects an invalid update request', async () => {
    const { body: created } = await createNote();
    const response = await fetch(`${baseUrl}${basePath}/${created.details.note.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Missing content' }),
    });
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe('Title and content must be non-empty strings');
  });

  it('returns 404 when updating an unknown note', async () => {
    const response = await fetch(`${baseUrl}${basePath}/missing-route-test-note`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Title', content: 'Content' }),
    });
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.message).toBe('Note not found');
  });

  it('deletes a note', async () => {
    const { body: created } = await createNote();
    const response = await fetch(`${baseUrl}${basePath}/${created.details.note.id}`, {
      method: 'DELETE',
    });
    const body = await response.json();

    createdIds.delete(created.details.note.id);
    expect(response.status).toBe(200);
    expect(body.message).toBe('Note deleted successfully');
  });

  it('returns 404 when deleting an unknown note', async () => {
    const response = await fetch(`${baseUrl}${basePath}/missing-route-test-note`, {
      method: 'DELETE',
    });
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.message).toBe('Note not found');
  });
});