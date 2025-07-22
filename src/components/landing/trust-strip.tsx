import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const clientLogos = [
  { name: "Client 1", logo: "https://placehold.co/120x40.png", dataAiHint: "company logo" },
  { name: "Client 2", logo: "https://placehold.co/120x40.png", dataAiHint: "tech company" },
  { name: "Client 3", logo: "https://placehold.co/120x40.png", dataAiHint: "startup logo" },
  { name: "Client 4", logo: "https://placehold.co/120x40.png", dataAiHint: "saas company" },
  { name: "Client 5", logo: "https://placehold.co/120x40.png", dataAiHint: "agency logo" },
]

export default function TrustStrip() {
  return (
    <section className="bg-transparent py-12">
      <div className="container flex flex-col items-center gap-8">
        <Badge variant="secondary" className="text-sm px-4 py-2 bg-card/50">500+ pieces delivered</Badge>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clientLogos.map((client) => (
            <Image
              key={client.name}
              src={client.logo}
              alt={client.name}
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity"
              data-ai-hint={client.dataAiHint}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
