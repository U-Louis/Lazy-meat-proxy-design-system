"use client"

import { InfoIcon } from "lucide-react"
import { toast } from "sonner"

import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Switch } from "@workspace/ui/components/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Pear", value: "pear" },
  { label: "Plum", value: "plum" },
]

const installed = [
  "button",
  "badge",
  "separator",
  "avatar",
  "skeleton",
  "card",
  "input",
  "textarea",
  "label",
  "field",
  "checkbox",
  "radio-group",
  "switch",
  "select",
  "alert",
  "dialog",
  "sheet",
  "dropdown-menu",
  "popover",
  "tooltip",
  "sonner",
  "tabs",
] as const

function Section({
  name,
  note,
  children,
}: {
  name: string
  note?: string
  children: React.ReactNode
}) {
  return (
    <section id={name} className="scroll-mt-6 space-y-3 border-t pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-lg font-medium">{name}</h2>
        <code className="text-muted-foreground text-xs">
          @workspace/ui/components/{name}
        </code>
      </div>
      {note ? <p className="text-muted-foreground text-sm">{note}</p> : null}
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  )
}

export function Catalog() {
  return (
    <div className="space-y-2">
      <nav className="flex flex-wrap gap-2">
        {installed.map((name) => (
          <a
            key={name}
            href={`#${name}`}
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline"
          >
            {name}
          </a>
        ))}
      </nav>

      <Section name="button">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </Section>

      <Section name="badge">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </Section>

      <Section name="separator">
        <div className="flex w-full max-w-sm items-center gap-3 text-sm">
          <span>Left</span>
          <Separator className="flex-1" />
          <span>Right</span>
        </div>
      </Section>

      <Section name="avatar">
        <Avatar>
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
      </Section>

      <Section name="skeleton">
        <div className="flex w-56 flex-col gap-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-8 w-24" />
        </div>
      </Section>

      <Section name="card">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>A short description sits under the title.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Use this for grouped content.</p>
          </CardContent>
        </Card>
      </Section>

      <Section name="input">
        <Input className="max-w-xs" placeholder="Email" type="email" />
      </Section>

      <Section name="textarea">
        <Textarea className="max-w-sm" placeholder="Notes" />
      </Section>

      <Section name="label">
        <div className="grid w-full max-w-xs gap-2">
          <Label htmlFor="display-name">Display name</Label>
          <Input id="display-name" placeholder="Ada" />
        </div>
      </Section>

      <Section name="field">
        <FieldGroup className="max-w-sm">
          <Field>
            <FieldLabel htmlFor="project">Project</FieldLabel>
            <Input id="project" placeholder="lazy-meat-proxy" />
            <FieldDescription>Shown on the project index.</FieldDescription>
          </Field>
        </FieldGroup>
      </Section>

      <Section name="checkbox">
        <Field orientation="horizontal">
          <Checkbox id="updates" defaultChecked />
          <FieldLabel htmlFor="updates">Send updates</FieldLabel>
        </Field>
      </Section>

      <Section name="radio-group">
        <RadioGroup defaultValue="light" className="w-auto">
          <Field orientation="horizontal">
            <RadioGroupItem value="light" id="theme-light" />
            <FieldLabel htmlFor="theme-light">Light</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="dark" id="theme-dark" />
            <FieldLabel htmlFor="theme-dark">Dark</FieldLabel>
          </Field>
        </RadioGroup>
      </Section>

      <Section name="switch">
        <Field orientation="horizontal">
          <Switch id="alerts" defaultChecked />
          <FieldLabel htmlFor="alerts">Alerts</FieldLabel>
        </Field>
      </Section>

      <Section name="select">
        <Select items={fruits} defaultValue="apple">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Fruit" />
          </SelectTrigger>
          <SelectContent>
            {fruits.map((fruit) => (
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Section>

      <Section name="alert">
        <Alert className="max-w-md">
          <InfoIcon />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>This kit is the reference for other projects.</AlertDescription>
        </Alert>
      </Section>

      <Section name="dialog">
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog</DialogTitle>
              <DialogDescription>Confirm an action that needs focus.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Section name="sheet">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet</SheetTitle>
              <SheetDescription>A panel that slides in from the edge.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Section>

      <Section name="dropdown-menu">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Open menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Section name="popover">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Popover</PopoverTitle>
              <PopoverDescription>Extra detail anchored to a control.</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Section>

      <Section name="tooltip">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      </Section>

      <Section
        name="sonner"
        note="Toaster is mounted in the root layout. Call toast() from the sonner package."
      >
        <Button variant="outline" onClick={() => toast("Saved")}>
          Show toast
        </Button>
      </Section>

      <Section name="tabs">
        <Tabs defaultValue="one" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="one">One</TabsTrigger>
            <TabsTrigger value="two">Two</TabsTrigger>
          </TabsList>
          <TabsContent value="one">First panel.</TabsContent>
          <TabsContent value="two">Second panel.</TabsContent>
        </Tabs>
      </Section>
    </div>
  )
}
