<p align="center">
  <img alt="lazy meat proxy" width="320" src="assets/logo-light.svg#gh-light-mode-only">
  <img alt="lazy meat proxy" width="320" src="assets/logo-dark.svg#gh-dark-mode-only">
</p>

# Lazy meat proxy design system

For robots, by robots, with a meat proxy in between.

## Install from GitHub

This repo is a shadcn registry. The current release is [`v0.2.0`](https://github.com/U-Louis/Lazy-meat-proxy-design-system/releases/tag/v0.2.0). From a project on the `base-luma` style:

```bash
npx shadcn@latest add U-Louis/Lazy-meat-proxy-design-system/button#v0.2.0
```

Install the theme and every component:

```bash
npx shadcn@latest add U-Louis/Lazy-meat-proxy-design-system/kit#v0.2.0
```

The color tokens alone are `U-Louis/Lazy-meat-proxy-design-system/theme#v0.2.0`.

`v0.2.0` adds the typefaces `font-source-sans-3`, `font-fredoka`, and `font-geist-mono` to `kit`. It also adds the kanban board copied from [ilinxa](https://ui.ilinxa.com/components/kanban-board). Import that from `@workspace/ui/components/kanban-board`. None of this is in the [`v0.1.0`](https://github.com/U-Louis/Lazy-meat-proxy-design-system/releases/tag/v0.1.0) tag.

## shadcn/ui monorepo template

Uses Next.js monorepo template with shadcn/ui.

## Adding components

To add a component, run this from the repo root:

```bash
npx shadcn@latest add <name> -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```

## Available components

Every UI component in the `base-luma` registry. Installed ones live in `packages/ui/src/components`.

| Component | In this kit | Docs |
| --- | --- | --- |
| accordion | | [docs](https://ui.shadcn.com/docs/components/base/accordion) |
| alert | yes | [docs](https://ui.shadcn.com/docs/components/base/alert) |
| alert-dialog | | [docs](https://ui.shadcn.com/docs/components/base/alert-dialog) |
| aspect-ratio | | [docs](https://ui.shadcn.com/docs/components/base/aspect-ratio) |
| attachment | | |
| avatar | yes | [docs](https://ui.shadcn.com/docs/components/base/avatar) |
| badge | yes | [docs](https://ui.shadcn.com/docs/components/base/badge) |
| breadcrumb | | [docs](https://ui.shadcn.com/docs/components/base/breadcrumb) |
| bubble | | |
| button | yes | [docs](https://ui.shadcn.com/docs/components/base/button) |
| button-group | | [docs](https://ui.shadcn.com/docs/components/base/button-group) |
| calendar | | [docs](https://ui.shadcn.com/docs/components/base/calendar) |
| card | yes | [docs](https://ui.shadcn.com/docs/components/base/card) |
| carousel | | [docs](https://ui.shadcn.com/docs/components/base/carousel) |
| chart | | [docs](https://ui.shadcn.com/docs/components/base/chart) |
| checkbox | yes | [docs](https://ui.shadcn.com/docs/components/base/checkbox) |
| code-block | | [docs](https://ui.shadcn.com/docs/components/base/code-block) |
| collapsible | | [docs](https://ui.shadcn.com/docs/components/base/collapsible) |
| combobox | | [docs](https://ui.shadcn.com/docs/components/base/combobox) |
| command | | [docs](https://ui.shadcn.com/docs/components/base/command) |
| context-menu | | [docs](https://ui.shadcn.com/docs/components/base/context-menu) |
| dialog | yes | [docs](https://ui.shadcn.com/docs/components/base/dialog) |
| direction | | [docs](https://ui.shadcn.com/docs/components/base/direction) |
| drawer | | [docs](https://ui.shadcn.com/docs/components/base/drawer) |
| dropdown-menu | yes | [docs](https://ui.shadcn.com/docs/components/base/dropdown-menu) |
| empty | | [docs](https://ui.shadcn.com/docs/components/base/empty) |
| field | yes | [docs](https://ui.shadcn.com/docs/components/base/field) |
| form | | |
| hover-card | | [docs](https://ui.shadcn.com/docs/components/base/hover-card) |
| input | yes | [docs](https://ui.shadcn.com/docs/components/base/input) |
| input-group | | [docs](https://ui.shadcn.com/docs/components/base/input-group) |
| input-otp | | [docs](https://ui.shadcn.com/docs/components/base/input-otp) |
| item | | [docs](https://ui.shadcn.com/docs/components/base/item) |
| kbd | | [docs](https://ui.shadcn.com/docs/components/base/kbd) |
| kanban-board | yes | [docs](https://ui.ilinxa.com/components/kanban-board) |
| label | yes | [docs](https://ui.shadcn.com/docs/components/base/label) |
| marker | | |
| menubar | | [docs](https://ui.shadcn.com/docs/components/base/menubar) |
| message | | |
| message-scroller | | |
| native-select | | [docs](https://ui.shadcn.com/docs/components/base/native-select) |
| navigation-menu | | [docs](https://ui.shadcn.com/docs/components/base/navigation-menu) |
| pagination | | [docs](https://ui.shadcn.com/docs/components/base/pagination) |
| popover | yes | [docs](https://ui.shadcn.com/docs/components/base/popover) |
| progress | | [docs](https://ui.shadcn.com/docs/components/base/progress) |
| questionnaire | | [docs](https://ui.shadcn.com/docs/components/base/questionnaire) |
| radio-group | yes | [docs](https://ui.shadcn.com/docs/components/base/radio-group) |
| resizable | | [docs](https://ui.shadcn.com/docs/components/base/resizable) |
| scroll-area | | [docs](https://ui.shadcn.com/docs/components/base/scroll-area) |
| select | yes | [docs](https://ui.shadcn.com/docs/components/base/select) |
| separator | yes | [docs](https://ui.shadcn.com/docs/components/base/separator) |
| sheet | yes | [docs](https://ui.shadcn.com/docs/components/base/sheet) |
| sidebar | | [docs](https://ui.shadcn.com/docs/components/base/sidebar) |
| skeleton | yes | [docs](https://ui.shadcn.com/docs/components/base/skeleton) |
| slider | | [docs](https://ui.shadcn.com/docs/components/base/slider) |
| sonner | yes | [docs](https://ui.shadcn.com/docs/components/base/sonner) |
| spinner | | [docs](https://ui.shadcn.com/docs/components/base/spinner) |
| switch | yes | [docs](https://ui.shadcn.com/docs/components/base/switch) |
| table | | [docs](https://ui.shadcn.com/docs/components/base/table) |
| tabs | yes | [docs](https://ui.shadcn.com/docs/components/base/tabs) |
| textarea | yes | [docs](https://ui.shadcn.com/docs/components/base/textarea) |
| toast | | [docs](https://ui.shadcn.com/docs/components/base/toast) |
| toggle | | [docs](https://ui.shadcn.com/docs/components/base/toggle) |
| toggle-group | | [docs](https://ui.shadcn.com/docs/components/base/toggle-group) |
| tooltip | yes | [docs](https://ui.shadcn.com/docs/components/base/tooltip) |
| trace | | [docs](https://ui.shadcn.com/docs/components/base/trace) |
