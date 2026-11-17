<p align="center">
  <img alt="lazy meat proxy" width="320" src="assets/logo-light.svg#gh-light-mode-only">
  <img alt="lazy meat proxy" width="320" src="assets/logo-dark.svg#gh-dark-mode-only">
</p>

# shadcn/ui monorepo template

This is a Next.js monorepo template with shadcn/ui.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
