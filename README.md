# MovieExplorer

A responsive movie and TV-show discovery application built with React. Browse the catalogue, search by title, and open a show card to view its details.

> MovieExplorer uses the public [TVMaze API](https://www.tvmaze.com/api) for its catalogue data. No API key is required.

## Features

- Browse a collection of shows in a responsive card grid
- Search shows by title
- Open a details modal with poster, overview, rating, premiere date, genres, language, runtime, type, status, network, and country (when available)
- Loading skeletons while catalogue data is being fetched
- A retry interface when an API request fails
- Responsive desktop and mobile navigation
- Custom 404 page for unknown routes
- Dark, movie-focused interface built with Tailwind CSS and daisyUI

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TVMaze API](https://www.tvmaze.com/api)

## Getting started

### Prerequisites

- Node.js 20.19+ (or a current LTS release)
- pnpm 9+ recommended

### Installation

```bash
git clone https://github.com/Atiar-Rahman/move-explorer.git
cd move-explorer
pnpm install
```

### Run locally

```bash
pnpm dev
```

Vite will print the local development URL in the terminal, normally `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the Vite development server. |
| `pnpm build` | Creates an optimized production build in `dist/`. |
| `pnpm preview` | Serves the production build locally. Run `pnpm build` first. |
| `pnpm lint` | Checks the codebase with ESLint. |

If you use npm instead, replace `pnpm` with `npm run` for scripts (for example, `npm run dev`). Use one package manager consistently to avoid changing the lockfile unintentionally.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home page with the hero banner and movie catalogue |
| `/movies` | Movie catalogue and title search |
| Any unknown path | Custom 404 page |

## Data source

The catalogue is loaded from `https://api.tvmaze.com/shows`, and title searches use TVMaze's single-show search endpoint. Results are therefore TV shows supplied by TVMaze, despite the app's movie-oriented branding.

The app makes requests directly from the browser. An internet connection and access to the TVMaze API are required for the catalogue and search to work.

## Project structure

```text
src/
├── assets/          # Banner and other static image assets
├── components/      # Navbar, banner, cards, modal, footer, and catalogue
├── layout/          # Shared page layout
├── pages/           # Home and 404 pages
├── routes/          # React Router configuration
├── index.css        # Tailwind and daisyUI imports
└── main.jsx         # Application entry point
```

## Current notes

- The **Trending** and **Popular** navigation links are present in the interface, but their routes are not implemented yet; opening them shows the 404 page.
- The trailer button, newsletter form, social links, and footer policy links are currently visual UI elements and are not connected to external actions.
- TVMaze may omit fields such as images, ratings, or runtime for some shows. The UI displays available data and uses fallbacks where applicable.

## Production build

```bash
pnpm build
pnpm preview
```

Deploy the generated `dist/` directory to any static hosting provider. Because the app uses browser-based routing, configure the host to return `index.html` for non-file routes so that React Router can render the appropriate page.

## License

This project does not currently include a license file. Add a license before distributing or reusing it under specific terms.
