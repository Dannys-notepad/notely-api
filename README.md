# Notely: Note Taking API

**Btechiefied BD Group 4A Capstone Project**

A CRUD note taking API. 

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [API Documentation](#api-documentation)
- [Collaborators](#collaborators)
- [Changelog](#changelog)

## Overview

A CRUD API that allows users to create, retrieve, update, and delete text notes with SQLite persistence.

## Tech Stack

- Node.js / Express.js
- Sqlite
- Vitest for integrated tests


## Getting Started

```bash
# 1. Clone the repo
git clone "https://github.com/Dannys-notepad/notely-api"
cd notely-api

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Run the server
npm start
Note: in development run `npm run dev` instead
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/notes/health` | Notes API health check |
| POST | `/api/v1/notes` | Create a note |
| GET | `/api/v1/notes` | Get all notes |
| GET | `/api/v1/notes/:id` | Get one note |
| PUT | `/api/v1/notes/:id` | Replace a note's title and content |
| DELETE | `/api/v1/notes/:id` | Delete a note |

## API Documentation

See [API.md](API.md) for request and response schemas, examples, validation rules, status codes, and error behavior.


## Collaborators

| Name                        | ID Number   | Role / Area |
|-----------------------------|-------------|-------------|
| Etim Daniel                 | BD26090106  |             |
| Bashirat Abdulganiyu        | BD26090703  |             |
| Kamolideen Gbenle           | BD26090546  |             |     
| Alpha Peace                 | BD26090310  |             |

## Changelog

> Every contributor adds a new entry here **each time** they push a change, even small ones. This gives the whole team a readable history of who did what, without needing to dig through `git log`.
>
> **Format:**
> - Newest entry goes at the **top**.
> - Bump the version number (e.g. `v1.0.0` → `v1.0.1` for a small change, `v1.1.0` for a new feature, `v2.0.0` for a breaking change).
> - Fill in the date, what you worked on, your name, and your ID number.

### `v1.0.0` — 2026-09-30
**Changes:** Corrected the 404 middleware, from throw an error, to returning a 404 response.
**Name: Etim Daniel**  ---
**ID Number: BD26090106**

---

### `v0.8.0` — 2026-09-30
**Changes:** Added error handler middleware 
**Name: Abdulganiyu Bashirat**  ---
**ID Number: BD26090703**

---

###  `v0.7.0` — 2026-09-29
**Changes:** Completed POST and PUT note endpoints, applied shared request validation, added HTTP route coverage, standardized API error responses, and documented the API in [API.md](API.md).
**Name: Etim Daniel**  ---
**ID Number: BD26090106**

---

### `v0.6.0` — 2026-09-29
**Changes:** Added DELETE note controller, DELETE controller test, and DELETE note route. 
**Name: Alpha Peace**  --- 
**ID Number: BD26090310**

---

### `v0.5.0` — 2026-09-26
**Changes:** Added validation middleware to check that note title and content are provided, and added tests for the validation middleware. 
**Name: Alpha Peace**  ---
**ID Number: BD26090310**

---

### `V.4.0` — 2026-09-24
**Changes:** Created the get routes: /api/v1/notes and /api/v1/notes/:id, and their respective controller
**Name: Kamolideen Gbenle**
**ID Number: BD26090549**

---

### `v0.3.0` — 2026-09-23
**Changes:** Tested note repository with vitest, added a markdown file documentation for use explanation. Fixed some typos and wrong path reference. Added error handler middleware (tested and working properly).
**Name: Etim Daniel**  ---
**ID Number: BD26090106**

---

### `v0.2.0` — 2026-09-22
**Changes:** Moved codebase from ESM syntax to CommonJS syntax, database setup, repository setup and repository test setup. Note: repository has not been tested yet.
**Name: Etim Daniel**  ---
**ID Number: BD26090106**

---

### `v0.1.0` — 2026-09-20
**Changes:** Initial project setup, repo structure, package.json, base server file, request logger middleware, and health check endpoint.
**Name: Etim Daniel**  ---
**ID Number: BD26090106**

---

<!--
Copy the block below for every new change and paste it directly under this line,
above the most recent entry, so the newest is always on top.

### `vX.X.X` — YYYY-MM-DD
**Changes:**
**Name:** ---
**ID Number:**
---
-->
