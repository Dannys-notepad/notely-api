import { describe, it, expect, vi } from "vitest";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const validateNote = require("../middlewares/validation.middleware.js");

describe("validateNote middleware", () => {
  it("passes when title and content are provided", () => {
    const req = {
      body: {
        title: "My Note",
        content: "This is my note"
      }
    };

    const res = {};
    const next = vi.fn();

    validateNote(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });

  it("returns a 400 error when title is missing", () => {
    const req = {
      body: {
        content: "This is my note"
      }
    };

    const res = {};
    const next = vi.fn();

    validateNote(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Title and content must be non-empty strings",
        status: 400
      })
    );
  });

  it("returns a 400 error when content is missing", () => {
    const req = {
      body: {
        title: "My Note"
      }
    };

    const res = {};
    const next = vi.fn();

    validateNote(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Title and content must be non-empty strings",
        status: 400
      })
    );
  });

  it("returns a 400 error when the request body is missing", () => {
    const req = {};
    const res = {};
    const next = vi.fn();

    validateNote(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Title and content must be non-empty strings",
        status: 400
      })
    );
  });

  it("rejects blank or non-string fields", () => {
    const req = {
      body: {
        title: "   ",
        content: 42
      }
    };
    const next = vi.fn();

    validateNote(req, {}, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Title and content must be non-empty strings",
        status: 400
      })
    );
  });
});
