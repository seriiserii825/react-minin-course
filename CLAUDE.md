# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `bun run dev` (Vite with HMR)
- **Build:** `bun run build` (runs `tsc -b && vite build`)
- **Lint:** `bun run lint` (ESLint)
- **Preview production build:** `bun run preview`
- **Install dependencies:** `bun install`

## Tech Stack

- React 19 + TypeScript (~5.9), Vite 7, Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- Package manager: bun (see `bun.lock`)
- Node 22 required (see `engines` in package.json)
- ESLint with typescript-eslint, react-hooks, and react-refresh plugins

## Architecture

Product catalog app that fetches live data from the [dummyjson.com](https://dummyjson.com/products) API.

### Data flow

`src/axios/axiosInstance.ts` (baseURL: `https://dummyjson.com`) → `src/services/productService.ts` (typed API methods: `getAll`, `getOne`) → `src/hooks/useProducts.ts` (manages loading/error state) → page/component

### Routing (React Router v7)

`main.tsx` renders `<BrowserRouter>` wrapping both `<MainHeader>` and `<App>`. Header is always visible. Routes in `App.tsx`:
- `/` → `HomePage` (product grid via `useProducts`)
- `/products/:id` → `SingleProductPage` (fetches single product; currently has placeholder UI pending full implementation)
- `/favorites` → `FavoritesPage`
- `*` → `NotFoundPage`

### Key directories

- `src/pages/` — Route-level components
- `src/components/` — Shared UI (e.g., `ProductsGrid`, `Modal`, `Preloader`, `Search`, `CreateProduct`)
- `src/hooks/` — Custom hooks (`useProducts` owns modal state too)
- `src/services/` — API service layer
- `src/interfaces/` — TypeScript interfaces mirroring dummyjson schema (`IProduct`, `IProductResponse`)
- `src/data/` — Static fallback data (`products_data.ts`)
- `src/utils/` — `formatPrice.ts` using `Intl.NumberFormat`

## Styling

- Tailwind CSS 4 imported via `@reference "tailwindcss"` in `src/index.css`
- Custom button component classes (`.btn`, `.btn-primary`, `.btn-secondary`, etc.) defined in `src/index.css` using `@layer components` with `@apply` directives
- Button size variants: `.btn-sm`, `.btn-md`, `.btn-lg`

## Conventions

- Interfaces prefixed with `I` (e.g., `IProduct`)
- Components are default-exported function components with typed props
- Props interfaces defined inline in the component file (e.g., `ProductProps`)
