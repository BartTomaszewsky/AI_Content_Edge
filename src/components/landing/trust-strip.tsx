import Image from "next/image"

const clientLogos = [
  { name: "BrightShift", logo: "https://placehold.co/120x40.png", dataAiHint: "abstract logo" },
  { name: "EverBloom", logo: "https://placehold.co/120x40.png", dataAiHint: "nature logo" },
  { name: "IgniteFlow", logo: "https://placehold.co/120x40.png", dataAiHint: "tech logo" },
  { name: "Momentum", logo: "https://placehold.co/120x40.png", dataAiHint: "minimalist logo" },
  { name: "StellarScape", logo: "https://placehold.co/120x40.png", dataAiHint: "geometric logo" },
]

export default function TrustStrip() {
  return (
    <section className="bg-transparent py-12">
      <div className="container flex flex-col items-center gap-8">
        <h3 className="text-center font-headline text-lg text-muted-foreground">Powering content for innovative brands and startups</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clientLogos.map((client) => (
            <Image
              key={client.name}
              src={client.logo}
              alt={`${client.name} logo`}
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
