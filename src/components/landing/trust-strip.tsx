import Image from "next/image"

const clientLogos = [
  { name: "Logationb", logo: "https://firebasestorage.googleapis.com/v0/b/stedi-demo-1.appspot.com/o/e5b0c791-749e-4a6c-9549-e23a4a0e9aa7.png?alt=media&token=e6e2f183-1a48-4e8a-84f6-59c2a3949f2b", dataAiHint: "abstract grid logo" },
  { name: "NextSytic", logo: "https://firebasestorage.googleapis.com/v0/b/stedi-demo-1.appspot.com/o/21a50a3b-9e4a-43c2-9e1e-2895f3b7d14a.png?alt=media&token=c41f7e34-5e1a-4d7a-8f5b-11d2e1a3b7d1", dataAiHint: "geometric shape logo" },
  { name: "TechWave", logo: "https://firebasestorage.googleapis.com/v0/b/stedi-demo-1.appspot.com/o/c241b7e1-8d2a-4a1e-8e8e-8a7e4a1e8e8e.png?alt=media&token=a8e1e7e4-1e8e-4a1e-8e8e-8a7e4a1e8e8e", dataAiHint: "tech text logo" },
  { name: "Cloud monogram", logo: "https://firebasestorage.googleapis.com/v0/b/stedi-demo-1.appspot.com/o/8e8e8a7e-4a1e-8e8e-8a7e-4a1e8e8e8a7e.png?alt=media&token=c1a3b5a7-96a1-4202-a74e-096d2719c237", dataAiHint: "cloud x logo" },
  { name: "Refresh Star", logo: "https://firebasestorage.googleapis.com/v0/b/stedi-demo-1.appspot.com/o/9e1e-2895f3b7d14a-21a50a3b-9e4a-43c2.png?alt=media&token=571de43a-7ed4-4f01-8f43-a6078345164d", dataAiHint: "refresh star logo" },
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
