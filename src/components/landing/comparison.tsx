import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ComparisonCard = ({ title, content, isFramework = false }: { title: string, content: React.ReactNode, isFramework?: boolean }) => (
  <Card className={`w-full ${isFramework ? "border-primary shadow-lg" : ""}`}>
    <CardHeader>
      <CardTitle className={`font-headline text-xl ${isFramework ? "text-primary" : ""}`}>{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground space-y-2 prose prose-sm">
      {content}
    </CardContent>
  </Card>
)

export default function Comparison() {
  return (
    <section id="comparison" className="bg-secondary py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">The Framework Difference</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Generic AI gives you words. Our framework-driven approach gives you results. See the side-by-side comparison.
          </p>
        </div>
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto h-auto md:h-10">
            <TabsTrigger value="blog">Blog Intro</TabsTrigger>
            <TabsTrigger value="email">Email Subject</TabsTrigger>
            <TabsTrigger value="ad">Facebook Ad</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard title="Generic AI" content={<p>&quot;Eco-friendly cleaning is important. In this blog we will discuss tips to keep your café clean while protecting the environment.&quot;</p>} />
              <ComparisonCard 
                title="Our AI Framework (AIDA)" 
                isFramework 
                content={
                  <>
                    <p><strong>ATTENTION:</strong> &quot;Your café's success depends on one thing customers notice instantly—cleanliness. But harsh chemicals are driving away your eco-conscious clientele.&quot;</p>
                    <p><strong>INTEREST:</strong> &quot;What if you could maintain spotless standards while attracting the 73% of customers who actively seek sustainable businesses?&quot;</p>
                    <p><strong>DESIRE:</strong> &quot;Transform your cleaning routine with proven eco-friendly methods that save money, protect staff health, and become your competitive advantage.&quot;</p>
                    <p><strong>ACTION:</strong> &quot;Discover the 5-step system successful cafés use...&quot;</p>
                  </>
                } 
              />
            </div>
          </TabsContent>
          
          <TabsContent value="email" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard title="Generic" content={<p>&quot;Newsletter Update&quot;</p>} />
              <ComparisonCard title="Framework" isFramework content={<p>&quot;The mistake 90% of café owners make with their cleaning supplies&quot;</p>} />
            </div>
          </TabsContent>

          <TabsContent value="ad" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard title="Generic" content={<p>&quot;Try our eco-friendly products for your business&quot;</p>} />
              <ComparisonCard title="Framework (PAS)" isFramework content={<p>&quot;Chemicals making customers cough? Staff getting headaches? There's a better way that actually saves you money...&quot;</p>} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
