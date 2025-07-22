"use client";

import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const businessTypes = ["Cafe/Restaurant", "E-commerce", "SaaS", "Local Service", "Other"];
const challenges = ["Getting Traffic", "Converting Leads", "Building Brand", "Saving Time", "Other"];

const formSchema = z.object({
  businessType: z.string().min(1, "Please select a business type."),
  challenge: z.string().min(1, "Please select your biggest challenge."),
  budget: z.array(z.number()).min(1),
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  package: z.enum(["starter", "growth"]),
});

const totalSteps = 4;

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: "",
      challenge: "",
      budget: [1000],
      name: "",
      email: "",
      phone: "",
      package: "starter",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
    toast({
      title: "🚀 Order Sent!",
      description: "Thank you! We've received your request and will be in touch shortly to confirm the details.",
      variant: "default",
      duration: 5000,
    });
    // Here you would typically handle the payment processing with Stripe
    // For this mock, we'll just reset the form and go to a success state.
    setStep(totalSteps + 1); // Go to success screen
  };

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof z.infer<typeof formSchema>)[] = [];
    if (step === 1) fieldsToValidate = ["businessType", "challenge"];
    if (step === 2) fieldsToValidate = ["budget"];
    if (step === 3) fieldsToValidate = ["name", "email"];

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };
  
  if (step === totalSteps + 1) {
    return (
        <section id="lead-capture" className="bg-secondary py-20 md:py-32">
            <div className="container max-w-2xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-green-100 rounded-full p-3 w-fit">
                            <Check className="h-10 w-10 text-green-600" />
                        </div>
                        <CardTitle className="font-headline text-3xl mt-4">Thank You!</CardTitle>
                        <CardDescription>
                        Your content request is in! We&apos;ll be in touch within 24 hours to get started.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center">
                        <Button onClick={() => { form.reset(); setStep(1); }}>Start a New Order</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
  }


  return (
    <section id="lead-capture" className="bg-secondary py-20 md:py-32">
      <div className="container max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <Progress value={(step / totalSteps) * 100} className="mb-4" />
            <CardTitle className="font-headline text-3xl">Get Your Content</CardTitle>
            <CardDescription>
              Just a few questions to tailor the perfect content for your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                   <div className="space-y-8">
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-lg font-semibold">What type of business do you run?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 gap-4"
                            >
                              {businessTypes.map(type => (
                                <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={type} id={type} />
                                  </FormControl>
                                  <Label htmlFor={type} className="font-normal">{type}</Label>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="challenge"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-lg font-semibold">What&apos;s your biggest content challenge?</FormLabel>
                          <FormControl>
                          <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 gap-4"
                            >
                              {challenges.map(type => (
                                <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={type} id={`challenge-${type}`} />
                                  </FormControl>
                                  <Label htmlFor={`challenge-${type}`} className="font-normal">{type}</Label>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                {step === 2 && (
                    <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold">What&apos;s your monthly content budget?</FormLabel>
                         <FormControl>
                            <div className="pt-8">
                                <Slider
                                    defaultValue={[1000]}
                                    max={5000}
                                    min={150}
                                    step={50}
                                    onValueChange={field.onChange}
                                />
                            </div>
                         </FormControl>
                         <div className="text-center font-bold text-xl pt-2">${field.value}</div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {step === 3 && (
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@company.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Phone (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="(123) 456-7890" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                )}
                {step === 4 && (
                     <FormField
                     control={form.control}
                     name="package"
                     render={({ field }) => (
                       <FormItem className="space-y-3">
                         <FormLabel className="text-lg font-semibold">Confirm Your Package</FormLabel>
                         <FormControl>
                           <RadioGroup
                             onValueChange={field.onChange}
                             defaultValue={field.value}
                             className="space-y-2"
                           >
                             <FormItem>
                                <Label htmlFor="starter" className="flex items-center p-4 border rounded-md has-[[data-state=checked]]:border-primary">
                                    <RadioGroupItem value="starter" id="starter" className="mr-4" />
                                    <div>
                                        <span className="font-bold">Starter Campaign</span>
                                        <p className="text-sm text-muted-foreground">$150 - 1 full campaign</p>
                                    </div>
                                </Label>
                             </FormItem>
                             <FormItem>
                                <Label htmlFor="growth" className="flex items-center p-4 border rounded-md has-[[data-state=checked]]:border-primary">
                                 <RadioGroupItem value="growth" id="growth" className="mr-4" />
                                 <div>
                                        <span className="font-bold">Growth Package</span>
                                        <p className="text-sm text-muted-foreground">$500 - 5 campaign credits</p>
                                    </div>
                                </Label>
                             </FormItem>
                           </RadioGroup>
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                )}
                <div className="flex justify-between pt-4">
                    {step > 1 && (
                        <Button type="button" variant="outline" onClick={handlePrevStep}>
                            Back
                        </Button>
                    )}
                     <div className="flex-grow" />
                    {step < totalSteps && (
                        <Button type="button" onClick={handleNextStep}>
                            Next
                        </Button>
                    )}
                    {step === totalSteps && (
                        <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            Proceed to Checkout
                        </Button>
                    )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
