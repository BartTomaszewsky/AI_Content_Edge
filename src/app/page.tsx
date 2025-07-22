import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import TrustStrip from "@/components/landing/trust-strip";
import Services from "@/components/landing/services";
import Comparison from "@/components/landing/comparison";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import FAQ from "@/components/landing/faq";
import LeadForm from "@/components/landing/lead-form";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-orange-700 opacity-20" />
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-background to-transparent" />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <TrustStrip />
          <Services />
          <Comparison />
          <Pricing />
          <Testimonials />
          <FAQ />
          <LeadForm />
        </main>
        <footer className="bg-transparent py-6 text-center text-sm text-muted-foreground">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} AI Content Edge. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
