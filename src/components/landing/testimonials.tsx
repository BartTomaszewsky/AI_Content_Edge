import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Founder, Bloom & Bean Cafe",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait",
    quote: "The blog content wasn't just well-written; it was strategic. We saw a 40% increase in organic traffic in just two months. It's like they read our minds.",
  },
  {
    name: "Michael Chen",
    company: "Marketing Lead, Techify Solutions",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait",
    quote: "We needed ad copy that converted, not just clicked. AI Content Edge delivered. Our cost-per-acquisition dropped by 25%. The ROI is undeniable.",
  },
  {
    name: "Jessica Rodriguez",
    company: "Owner, Salty Waves Surf Shop",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "person smiling",
    quote: "Their social media package took all the stress off my plate and got people talking. Our engagement is up, and we're getting more foot traffic from local posts.",
  },
];

const Rating = () => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
    </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Trusted by Businesses Like Yours</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their results.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between shadow-md">
              <CardContent className="pt-6">
                <Rating />
                <p className="mt-4 text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
              <CardHeader className="flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
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
            <Card className="bg-primary text-primary-foreground p-8 md:p-12 shadow-xl">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold">Mini Case Study: How [Company] Increased Website Traffic 150%</h3>
                        <p className="mt-4 opacity-80">By implementing a consistent, SEO-focused blog strategy using our 'Authority Builder' framework, we helped a local B2B service provider dominate local search results for 5 key terms, resulting in a 150% traffic surge and a 70% increase in qualified leads within 3 months.</p>
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
