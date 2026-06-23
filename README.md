# Set Operations

A minimal tool for performing set operations (union, intersection, difference) on two text inputs.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Vitest

## Getting started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm test` | Run tests in watch mode |
| `npm test -- --run` | Run tests once and exit |
| `npm run build` | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally |

## Project structure

```
src/
  components/       # UI components
  hooks/            # Custom React hooks
  services/         # Pure logic (set operations, parsing, formatting)
  types/            # Shared TypeScript types
```

## Running tests

Tests live alongside the service they cover (`*.test.ts`). Vitest is used as the test runner.

```bash
# Watch mode — reruns on file changes
npm test

# Single run — useful for CI
npm test -- --run
```
