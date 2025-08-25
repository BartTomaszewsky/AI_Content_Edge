import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Megaphone, Share2 } from "lucide-react"

const services = [
  {
    title: "SEO Blog Posts",
    description: "Drive organic traffic with 1000+ word, SEO-optimized articles, complete with imagery, ready to publish and rank on search engines.",
    icon: <FileText className="h-10 w-10 text-primary" />,
  },
  {
    title: "Social Media Content",
    description: "Build your community with engaging, platform-specific content for LinkedIn, Instagram, Facebook, and X (formerly Twitter).",
    icon: <Share2 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Performance Marketing Copy",
    description: "Boost conversions with compelling, framework-driven copy for your digital ads, landing pages, and email marketing campaigns.",
    icon: <Megaphone className="h-10 w-10 text-primary" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Your Complete Content Toolkit</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Each campaign delivers a cohesive set of assets designed for maximum impact across your most important channels.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                {service.icon}
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
