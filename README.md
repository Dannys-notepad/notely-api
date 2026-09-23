# Notely: Note Taking API

**Btechiefied BD Group 4A Capstone Project**

A CRUD note taking API. 

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Collaborators](#collaborators)
- [Changelog](#changelog)

## Overview

A CRUD API that allows users to to create, retrieve, update, and delete text notes, with data persistency.

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

| Method | Endpoint      | Description        |
|--------|---------------|---------------------|
| POST   | `/notes`      | Create a note       |
| GET    | `/notes`      | Get all notes       |
| GET    | `/notes/:id`  | Get a single note   |
| PUT    | `/notes/:id`  | Update a note       |
| DELETE | `/notes/:id`  | Delete a note       |


## Collaborators

| Name                        | ID Number   | Role / Area |
|-----------------------------|-------------|-------------|
| Etim Daniel                 | BD26090106  |             |
| Bashirat Abdulganiyu        | BD26090703  |             |
| Edward Selasi Torsu         | DM26091285  |             |
| Kamolideen Gbenle           | BD26090549  |             |
| Oluwasegun Babatunde        |             |             |
| Taiwo Adepoju               |             |             |
| Agupusi Peace               | BD26090843  |             |
| Chinwuba Onyeka Success     | BD26076031  |             |
| Eniola Onaolapo             |             |             |
| George Eipa                 | BD26090205  |             |
| Ibrahim Adebowale           | BD26090596  |             |
| Destiny Favour              |             |             |
| Richard Nkansah             |             |             |
| Samuel Coker                | BD26090107  |             |
| Divine Ndudim                |             |             |
| Khadijat Ishaq Muhammad     | BD26090109  |             |
| Silvester Nyinge            |             |             |
| Omachile Basil Ojotule      |             |             |
| John Adisa                  |             |             |
| Esther Ayeni                | BD26090793  |             |
| Abraham Bobson Turay        | BD26090563  |             |
| Erica Boakyewaa Aboagye     |             |             |
| Morayooluwa Ajao            | BD26090681  |             |
| Veronnicah Karogo           | BD26090895  |             |
| Raphael Afolayan            |             |             |
| Kondwani Mbewe              | BD26090778  |             |
| Abdulsobur Abdulrasheed     |             |             |
| Ellis Greene                |             |             |
| Alpha Peace                 | BD26090310  |             |

## Changelog

> Every contributor adds a new entry here **each time** they push a change, even small ones. This gives the whole team a readable history of who did what, without needing to dig through `git log`.
>
> **Format:**
> - Newest entry goes at the **top**.
> - Bump the version number (e.g. `v1.0.0` → `v1.0.1` for a small change, `v1.1.0` for a new feature, `v2.0.0` for a breaking change).
> - Fill in the date, what you worked on, your name, and your ID number.

---

### `v0.3.` — 2026-09-23
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
