import { Catalog } from "@/components/catalog"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col gap-10 p-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-medium">Lazy meat proxy</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Installed components from <code>@workspace/ui</code>. Press <kbd>d</kbd>{" "}
          to toggle dark mode.
        </p>
      </header>

      <Catalog />
    </main>
  )
}
