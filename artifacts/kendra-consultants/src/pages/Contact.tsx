import { useState } from "react";
import { Shell } from "@/components/layout/Shell";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Simplified list of countries to demonstrate logic
const countries = [
  "Australia", "New Zealand", "Fiji",
  "Qatar", "UAE", "Saudi Arabia", "Oman", "Bahrain", "Kuwait",
  "Sri Lanka", "India", "Maldives", "United Kingdom", "United States", "Other"
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone is required"),
  country: z.string().min(1, "Country is required"),
  service: z.string().min(1, "Service is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const offices = {
  sriLanka: {
    id: "srilanka",
    name: "Sri Lanka (Headquarters)",
    address: "Level 12, Parkland Building, 33 Park Street, Colombo 02",
    phone: "+94 71 331 5789",
    email: "sri-lanka@consultkendra.com",
    hours: "Mon-Fri, 8:30 AM - 5:30 PM (IST)"
  },
  qatar: {
    id: "qatar",
    name: "Middle East",
    address: "Office 45, West Bay Commercial Centre, Diplomatic Area, Doha",
    phone: "+974 4423 8910",
    email: "qatar@consultkendra.com",
    hours: "Sun-Thu, 8:00 AM - 5:00 PM (AST)"
  },
  australia: {
    id: "australia",
    name: "Australia",
    address: "Suite 8, Level 14, 333 Collins Street, Melbourne VIC 3000",
    phone: "+61 3 9876 5432",
    email: "australia@consultkendra.com",
    hours: "Mon-Fri, 9:00 AM - 5:00 PM (AEST)"
  }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [routedOffice, setRoutedOffice] = useState<typeof offices.sriLanka | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      subject: "",
      message: ""
    }
  });

  // Watch country to determine routing
  const selectedCountry = form.watch("country");
  
  const getOfficeForCountry = (country: string) => {
    const middleEast = ["Qatar", "UAE", "Saudi Arabia", "Oman", "Bahrain", "Kuwait"];
    const oceania = ["Australia", "New Zealand", "Fiji"];
    
    if (middleEast.includes(country)) return offices.qatar;
    if (oceania.includes(country)) return offices.australia;
    return offices.sriLanka; // Default
  };

  const currentMatchedOffice = selectedCountry ? getOfficeForCountry(selectedCountry) : null;

  function onSubmit(values: z.infer<typeof formSchema>) {
    const office = getOfficeForCountry(values.country);
    setRoutedOffice(office);
    setSubmitted(true);
  }

  return (
    <Shell>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 text-white border-b-4 border-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-white/80 font-light leading-relaxed">
            Reach out to our experts. We operate globally and are ready to discuss your project needs and provide tailored solutions to support your objectives.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Form Section */}
            <div className="lg:col-span-3">
              {submitted && routedOffice ? (
                <div className="bg-card border border-secondary/30 p-12 text-center h-full flex flex-col justify-center items-center">
                  <CheckCircle2 className="w-16 h-16 text-secondary mb-6" />
                  <h3 className="font-serif text-3xl font-bold mb-4">Inquiry Received</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Thank you. Based on your location, your inquiry has been routed to our <strong className="text-foreground">{routedOffice.name}</strong> office. A senior consultant will contact you shortly.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); form.reset(); }}
                    className="text-primary font-bold hover:text-secondary uppercase tracking-wider text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-card border border-border p-8 md:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl font-bold mb-6">Send an Inquiry</h2>
                  
                  {currentMatchedOffice && (
                    <div className="mb-8 p-4 bg-muted border-l-4 border-secondary text-sm">
                      <span className="text-muted-foreground block mb-1">Your inquiry will be routed to:</span>
                      <strong className="text-foreground font-semibold">{currentMatchedOffice.name}</strong>
                    </div>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-background border-border rounded-none" {...field} />
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
                              <FormLabel className="text-foreground font-semibold">Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="john@company.com" type="email" className="bg-background border-border rounded-none" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 234 567 8900" className="bg-background border-border rounded-none" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Project Location / Country *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background border-border rounded-none">
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {countries.map(c => (
                                    <SelectItem key={c} value={c}>{c}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Service of Interest *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background border-border rounded-none">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cost-planning">Cost Planning & Estimating</SelectItem>
                                <SelectItem value="procurement">Procurement & Tendering</SelectItem>
                                <SelectItem value="contract-management">Commercial & Contract Management</SelectItem>
                                <SelectItem value="claims">Claims & Dispute Management</SelectItem>
                                <SelectItem value="contractor-advisory">Contractor Advisory</SelectItem>
                                <SelectItem value="academic">Academic Services</SelectItem>
                                <SelectItem value="other">Other Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="Brief subject of your inquiry" className="bg-background border-border rounded-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your project or requirements..." 
                                className="bg-background border-border rounded-none min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 font-bold tracking-widest text-sm hover:bg-primary/90 transition-colors uppercase"
                      >
                        Submit Inquiry
                      </button>
                    </form>
                  </Form>
                </div>
              )}
            </div>

            {/* Office Locations */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="font-serif text-2xl font-bold mb-6">Our Offices</h3>
              
              {Object.values(offices).map((office) => (
                <div 
                  key={office.id} 
                  className={`p-6 border transition-all ${
                    currentMatchedOffice?.id === office.id 
                      ? "border-secondary bg-secondary/5 shadow-md scale-[1.02]" 
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <h4 className="font-serif text-xl font-bold mb-4">{office.name}</h4>
                  
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0" />
                      <p>{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <p>{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <p>{office.email}</p>
                    </div>
                    <div className="flex items-start gap-3 pt-2 border-t border-border mt-2">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <p>{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Simple stylized map representation */}
              <div className="h-48 bg-primary rounded border border-primary-border overflow-hidden relative mt-8 flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                 <div className="text-center relative z-10 p-4">
                    <p className="text-white font-serif text-lg italic mb-2">"Global standards, local expertise."</p>
                    <div className="flex justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-75" />
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-150" />
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Shell>
  );
}
