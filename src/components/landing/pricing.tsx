import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter Campaign",
    price: "$150",
    features: [
      "1 comprehensive content campaign",
      "1000-word SEO blog post with image",
      "4 social media posts (adapted)",
      "2 marketing copy pieces",
      "Complete PDF package with assets",
    ],
    cta: "Start with Starter",
    isPrimary: false,
  },
  {
    name: "Growth Package",
    price: "$500",
    badge: "Save $250",
    features: [
      "5 content campaign credits",
      "Valid for 12 months",
      "All Starter features × 5",
      "Priority delivery",
      "Direct consultation access",
    ],
    cta: "Go for Growth",
    isPrimary: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Flexible Plans for Every Business</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose a one-off campaign or stock up on credits for long-term growth. No subscriptions, no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col bg-card/50 ${tier.isPrimary ? 'border-primary shadow-2xl' : 'shadow-md'}`}>
              <CardHeader className="relative">
                {tier.badge && (
                  <Badge className="absolute top-0 -translate-y-1/2 bg-accent text-accent-foreground">{tier.badge}</Badge>
                )}
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground"> / campaign</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className={`w-full ${tier.isPrimary ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}>
                  <Link href="#lead-capture">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
