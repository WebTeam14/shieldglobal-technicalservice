# Shield Global Technical Services LLC

Corporate website for Shield Global Technical Services LLC — engineering, construction, facility management, and technical support services.

## Architecture

```
src/
├── assets/          # logo, images, data, icons, fonts
├── components/
│   ├── layout/      # Header, Footer, MobileMenu
│   ├── shared/      # page-intro, reveal, quote-modal
│   └── ui/          # Radix/shadcn primitives
├── layouts/         # MainLayout
├── pages/           # Page components (Home, About, Services, ...)
├── sections/        # Page section modules
├── routes/          # TanStack Router route files (routing only)
├── hooks/
├── lib/
├── router.tsx
├── routeTree.gen.ts
└── styles.css
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint

## Stack

React 19, TanStack Router / Start, Tailwind CSS 4, Framer Motion, Radix UI.
