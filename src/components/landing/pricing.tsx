import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter Campaign",
    price: "$150",
    description: "Perfect for testing the waters or a single, high-impact campaign.",
    features: [
      "1 full content campaign",
      "1,000-word SEO-driven blog post",
      "4 professionally adapted social media posts",
      "2 pieces of high-converting marketing copy",
      "Human review and refinement",
      "Delivered in 48 hours",
    ],
    cta: "Choose Starter",
    isPrimary: false,
  },
  {
    name: "Growth Package",
    price: "$500",
    description: "Ideal for sustained marketing efforts and long-term content strategy.",
    badge: "Best Value",
    features: [
      "5 content campaign credits (buy 4, get 1 free)",
      "All Starter features for each credit",
      "Use credits anytime within 12 months",
      "Priority turnaround (24-36 hours)",
      "Direct consultation access",
      "Save $250 compared to individual campaigns",
    ],
    cta: "Choose Growth",
    isPrimary: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose a one-off campaign or stock up on credits for maximum value. No subscriptions, no hidden fees, just results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col bg-card/50 ${tier.isPrimary ? 'border-primary shadow-2xl' : 'shadow-md'}`}>
              <CardHeader className="relative">
                {tier.badge && (
                  <Badge className="absolute top-0 -translate-y-1/2 bg-accent text-accent-foreground rounded-full px-4 py-1">{tier.badge}</Badge>
                )}
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">/ {tier.name === 'Starter Campaign' ? 'campaign' : '5 campaigns'}</span>
                </div>
                <CardDescription className="pt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className={`w-full rounded-full ${tier.isPrimary ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
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
