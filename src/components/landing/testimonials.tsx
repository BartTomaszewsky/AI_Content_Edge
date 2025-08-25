import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Founder, Bloom & Bean Cafe",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait",
    quote: "The blog content wasn't just well-written-it was strategic. We saw a 40% increase in organic traffic in just two months. It's like they read our minds and knew exactly what our customers wanted to read.",
  },
  {
    name: "Michael Chen",
    company: "Marketing Lead, Techify Solutions",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait",
    quote: "We needed ad copy that converted, not just generated clicks. AI Content Edge delivered. Our cost-per-acquisition dropped by 25%, and the quality of leads improved significantly. The ROI is undeniable.",
  },
  {
    name: "Jessica Rodriguez",
    company: "Owner, Salty Waves Surf Shop",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "person smiling",
    quote: "Their social media package took all the stress off my plate and got people genuinely talking about our brand. Our engagement is way up, and we're seeing more foot traffic from local customers who saw our posts.",
  },
];

const Rating = () => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
    </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-transparent py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Don't Just Take Our Word For It</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            See how we've helped businesses just like yours turn their content into a growth engine.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between shadow-md bg-card/50">
              <CardContent className="pt-6">
                <Rating />
                <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardHeader className="flex-row items-center gap-4 pt-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-16">
            <Card className="bg-primary/80 text-primary-foreground p-8 md:p-12 shadow-xl">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold">Case Study: 150% Traffic Increase in 90 Days</h3>
                        <p className="mt-4 opacity-80">A B2B service provider was struggling to rank. By implementing a consistent, SEO-focused blog strategy using our 'Authority Builder' framework, they dominated local search for 5 key terms. This resulted in a 150% traffic surge and a 70% increase in qualified inbound leads within a single quarter.</p>
                    </div>
                    <div className="text-center">
                        <p className="font-headline text-6xl md:text-7xl font-bold">150%</p>
                        <p className="font-bold opacity-80">Increase in Traffic</p>
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </section>
  )
}
