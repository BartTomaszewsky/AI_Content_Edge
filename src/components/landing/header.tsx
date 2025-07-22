import { Button } from "@/components/ui/button"
import { BotMessageSquare } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <BotMessageSquare className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold font-headline">AI Content Edge</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#pricing">Get My $150 Plan</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
