import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "How is AI content different from human-written content?",
      answer:
        "Our AI uses sophisticated frameworks like AIDA and PAS, models trained on top-performing marketing copy. While a human writer is excellent, our AI provides top-tier, structured content at a fraction of the time and cost, which we then have human-reviewed for brand voice and accuracy.",
    },
    {
      question: "Will the content be unique and plagiarism-free?",
      answer:
        "Absolutely. Every piece of content is generated uniquely for your project and passed through multiple plagiarism checks. We guarantee 100% original content.",
    },
    {
      question: "How quickly can I get my content package?",
      answer:
        "Our standard delivery time is 48 hours for the Starter Campaign. The Growth Package offers priority delivery, often within 24-36 hours per credit used.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "We offer one round of revisions on every content piece. Our goal is your complete satisfaction. We'll work with you to ensure the copy aligns perfectly with your vision and goals.",
    },
    {
        question: "Can I specify my industry and target audience?",
        answer:
          "Yes. During the checkout process, you'll provide details about your business, industry, target audience, and specific goals. This information is crucial for our AI to tailor the content effectively."
    }
  ]
  
  export default function FAQ() {
    return (
      <section id="faq" className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Have questions? We have answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  