<p align="center">
  <img src="public/orange.svg" width="80" alt="Olinda" />
</p>

<h1 align="center">Olinda pattern library</h1>

<p align="center">Patterns for digital experiences — small, considered, useful.</p>

---

Olinda is a React + TypeScript + Vite pattern library. The designer surface is
five semantic motion styles (Quiet · Clear · Editorial · Bold · Playful) applied to a
handful of Ready patterns. Each pattern generates a "Use with Claude" prompt so
you can drop it into another project.

**Stack**

- React 19
- Vite 8
- Motion for React 12
- TypeScript
- React Router 7 (declarative)

**Structure**

- `src/olinda/core/` — 8 reusable motion primitives
- `src/olinda/patterns/` — 10 Ready patterns (5 files each)
- `src/olinda/styles/` — semantic motion tokens + `resolveMotion`
- `src/olinda/theme/` — abstract theme contract; emits `--v-*` CSS variables
- `src/olinda/registry/` — the single source of truth + generated manifest
- `src/olinda/app/` — the designer-facing site
- `src/legacy/` — 32 earlier UI patterns behind Mantine; lazy-loaded at `/legacy`

**Sections**

- **Examples** — every Ready pattern
- **Collections** — Quiet · Clear · Bold · Playful · Editorial · Experimental
- **Styles** — the five motion styles, with tokens
- **Use** — how to use Olinda with Claude Code

**Running locally**

```
npm install
npm run dev
```

**Scripts**

- `npm run dev` — Vite dev server
- `npm run build` — regenerates the manifest, type-checks, and builds
- `npm run test` — vitest unit tests
- `npm run manifest` — regenerate `src/olinda/registry/olinda.manifest.json`

Read `docs/OLINDA.md` before adding or modifying patterns.
