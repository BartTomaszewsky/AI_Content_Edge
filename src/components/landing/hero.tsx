import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Marketing Copy in 48h—AI that Writes Like a Pro, Not a Robot
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            See the difference in one scroll. We use advanced frameworks to create content that captivates, converts, and climbs the search rankings.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#pricing">Get My $150 Plan</Link>
          </Button>
        </div>
        <div className="relative aspect-video rounded-xl shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Illustration showing a brain connected to a computer, symbolizing AI-powered content creation"
            fill
            className="rounded-xl object-cover"
            data-ai-hint="ai content"
          />
        </div>
      </div>
    </section>
  )
}