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
    <div className="flex min-h-screen w-full flex-col">
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
      <footer className="bg-secondary py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AI Content Edge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
