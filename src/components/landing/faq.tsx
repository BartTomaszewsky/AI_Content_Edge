import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Is this just another AI content generator?",
      answer:
        "Not at all. We combine advanced AI-driven by proven marketing frameworks (like AIDA and PAS) with a human review process. This ensures the content is not only high-quality and structured for results, but also perfectly aligned with your brand's unique voice.",
    },
    {
      question: "Is the content truly unique and safe to use?",
      answer:
        "Yes. Every piece of content is generated on a per-project basis and rigorously checked against plagiarism. We guarantee 100% original content that you can confidently publish.",
    },
    {
      question: "How fast is the turnaround?",
      answer:
        "Our standard delivery for a full Starter Campaign is just 48 hours. The Growth Package includes priority delivery, often completed within 24-36 hours per campaign credit.",
    },
    {
      question: "What if I need changes to the content?",
      answer:
        "Your satisfaction is our priority. We include one round of revisions with every content piece. We'll collaborate with you to make sure the copy perfectly matches your vision and achieves your goals.",
    },
    {
        question: "How do you tailor the content to my specific business?",
        answer:
          "The process starts with you. Our lead form captures key details about your business, industry, target audience, and campaign goals. This information is fundamental to how our AI tailors the content specifically for you."
    }
  ]
  
  export default function FAQ() {
    return (
      <section id="faq" className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              Your Questions, Answered
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Everything you need to know before you get started.
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
