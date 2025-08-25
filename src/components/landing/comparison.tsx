import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ComparisonCard = ({ title, content, isFramework = false }: { title: string, content: React.ReactNode, isFramework?: boolean }) => (
  <Card className={`w-full bg-card/50 ${isFramework ? "border-primary shadow-lg" : ""}`}>
    <CardHeader>
      <CardTitle className={`font-headline text-xl ${isFramework ? "text-primary" : ""}`}>{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground space-y-2 prose prose-sm prose-invert">
      {content}
    </CardContent>
  </Card>
)

export default function Comparison() {
  return (
    <section id="comparison" className="bg-transparent py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">The Framework Advantage</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Generic AI gives you words. Our framework-driven approach gives you a competitive edge. See the difference for yourself.
          </p>
        </div>
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto h-auto md:h-10">
            <TabsTrigger value="blog">Blog Intro</TabsTrigger>
            <TabsTrigger value="email">Email Subject Line</TabsTrigger>
            <TabsTrigger value="ad">Ad Copy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard 
                title="Generic AI Output" 
                content={<p>"Being eco-friendly is a good idea. This article will explore why sustainable practices are beneficial for businesses and how you can implement them."</p>} 
              />
              <ComparisonCard 
                title="Our AI Framework (AIDA)" 
                isFramework 
                content={
                  <>
                    <p><strong>ATTENTION:</strong> "Your customers care about sustainability-are you showing them you do too? A stained reputation is harder to clean than a dirty floor."</p>
                    <p><strong>INTEREST:</strong> "Discover how top-tier cafes boost their brand and bottom line with simple, eco-friendly cleaning solutions that customers love."</p>
                    <p><strong>DESIRE:</strong> "Imagine a spotless cafe that not only shines but also communicates your commitment to the planet, attracting a loyal, high-value clientele."</p>
                    <p><strong>ACTION:</strong> "Get our 5-step checklist for a greener, cleaner cafe..."</p>
                  </>
                } 
              />
            </div>
          </TabsContent>
          
          <TabsContent value="email" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard title="Generic AI Output" content={<p>"Our Company Newsletter"</p>} />
              <ComparisonCard title="Our AI Framework" isFramework content={<p>"Your competitor's secret weapon? It's not what you think."</p>} />
            </div>
          </TabsContent>

          <TabsContent value="ad" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard title="Generic AI Output" content={<p>"Buy our new product. It is very good. Click here."</p>} />
              <ComparisonCard title="Our AI Framework (PAS)" isFramework content={<p>"Are your ads failing to connect? Instead of shouting into the void, let's solve your customer's real problem and turn indifference into interest."</p>} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
