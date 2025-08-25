import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Stop Sounding Like a Robot. Get Content That Actually Converts.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Tired of generic AI? We blend advanced AI with proven marketing frameworks to deliver high-performance copy in 48 hours that captivates customers and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Link href="#lead-capture">Start Your Campaign</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="#comparison">See The Difference</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl shadow-lg">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/stedi-demo-1.appspot.com/o/14e24227-81c8-4770-9831-29177a56a6ac.png?alt=media&token=d120a1c1-432d-4293-87a3-4a11b626e5d8"
            alt="An abstract image of a sphere with glowing energy lines, representing data and insights."
            fill
            className="rounded-xl object-cover"
            data-ai-hint="abstract energy data"
          />
        </div>
      </div>
    </section>
  )
}
