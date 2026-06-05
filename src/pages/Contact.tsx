import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "wouter";
import { Phone, MapPin, Clock, CheckCircle2, Send, ArrowLeft, MessageSquare } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  category: z.string({ required_error: "Please select a category" }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CATEGORIES = ["Tiles", "Granite", "Marble", "Sanitary Fittings", "Kota Stone & Other", "General Enquiry"];

function FloatingInput({
  label,
  error,
  type = "text",
  ...props
}: {
  label: string;
  error?: string;
  type?: string;
  [key: string]: unknown;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = typeof props.value === "string" && (props.value as string).length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-white/5 border rounded-xl px-4 pt-6 pb-3 text-white text-base outline-none transition-all duration-300 peer
          ${focused ? "border-[#c8a97a] shadow-[0_0_0_3px_rgba(200,169,122,0.15)]" : "border-white/10"}
          ${error ? "border-red-400/60" : ""}`}
        {...props}
      />
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-sans
          ${focused || hasValue ? "top-2 text-[11px] tracking-[0.15em] uppercase font-semibold text-[#c8a97a]" : "top-1/2 -translate-y-1/2 text-base text-white/40"}`}
      >
        {label}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function FloatingTextarea({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
  [key: string]: unknown;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = typeof props.value === "string" && (props.value as string).length > 0;

  return (
    <div className="relative">
      <textarea
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className={`w-full bg-white/5 border rounded-xl px-4 pt-8 pb-3 text-white text-base outline-none resize-none transition-all duration-300
          ${focused ? "border-[#c8a97a] shadow-[0_0_0_3px_rgba(200,169,122,0.15)]" : "border-white/10"}
          ${error ? "border-red-400/60" : ""}`}
        {...props}
      />
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-sans
          ${focused || hasValue ? "top-2 text-[11px] tracking-[0.15em] uppercase font-semibold text-[#c8a97a]" : "top-5 text-base text-white/40"}`}
      >
        {label}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [catOpen, setCatOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", message: "", category: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const text = `Name: ${values.name}%0AContact: ${values.phone}%0ACategory: ${values.category}%0A%0A${values.message}`;
    window.open(`https://wa.me/919451582588?text=${text}`, "_blank");
    setSubmitted(true);
  }

  const infoCards = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Our Showrooms",
      lines: ["Awas Vikas-3, Panki-Kalyanpur Road, Kanpur-17", "H.O.: 220 Nankari, IIT, Kanpur-16"],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Direct Lines",
      lines: ["Sanjeev: 9451582588", "Rajiv: 7499783925", "Office: 8840784729"],
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      lines: ["Mon–Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 5:00 PM"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0d0505]"
    >
      {/* Hero */}
      <section className="relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,_#3d1a0a_0%,_#1a0505_50%,_#0d0505_100%)]" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#8B1A1A]/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium tracking-wider uppercase mb-10 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={1} className="block text-[#c8a97a] font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Get in Touch
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={2} className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight">
            Visit Our<br /><span className="text-[#c8a97a] italic">Showroom</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-4 text-white/50 text-lg font-light max-w-lg">
            Kanpur's most trusted marble & tiles destination — decades of honest service.
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="px-4 pb-0 -mt-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#c8a97a]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#8B1A1A]/30 flex items-center justify-center text-[#c8a97a] group-hover:bg-[#8B1A1A]/50 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-white font-semibold font-sans">{card.title}</h3>
                </div>
                <div className="space-y-1">
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-white/60 text-sm font-light leading-relaxed">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[420px] mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570!2d80.2707!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3a1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAwas%20Vikas%203%2C%20Panki%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1000000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex gap-3">
                <a href="https://wa.me/919451582588" target="_blank" rel="noreferrer" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#25D366] hover:bg-[#20b858] text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2 text-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp Us
                  </motion.button>
                </a>
                <a href="https://maps.google.com/?q=Awas+Vikas+3+Panki+Kalyanpur+Road+Kanpur" target="_blank" rel="noreferrer" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-white/20 hover:border-[#c8a97a] text-white rounded-xl py-3 flex items-center justify-center gap-2 text-sm transition-colors"
                  >
                    <MapPin className="w-4 h-4" /> Get Directions
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="font-serif text-3xl text-white font-bold mb-3"
                      >
                        Message Sent!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/60 mb-8"
                      >
                        Your enquiry has been opened in WhatsApp. We'll respond shortly.
                      </motion.p>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { setSubmitted(false); form.reset(); setSelectedCategory(""); }}
                        className="bg-[#8B1A1A] hover:bg-[#7a1515] text-white rounded-xl px-8 py-3 font-medium transition-colors"
                      >
                        Send Another
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="mb-8">
                        <h2 className="font-serif text-3xl text-white font-bold mb-2">Send an Enquiry</h2>
                        <p className="text-white/50 text-sm font-light">Fill the form and we'll connect via WhatsApp instantly.</p>
                      </div>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-5">
                            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field, fieldState }) => (
                                  <FormItem>
                                    <FormControl>
                                      <FloatingInput label="Your Name" error={fieldState.error?.message} {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field, fieldState }) => (
                                  <FormItem>
                                    <FormControl>
                                      <FloatingInput label="Phone Number" type="tel" error={fieldState.error?.message} {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                          </div>

                          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                            <FormField
                              control={form.control}
                              name="category"
                              render={({ field, fieldState }) => (
                                <FormItem>
                                  <FormControl>
                                    <div className="relative">
                                      <button
                                        type="button"
                                        onClick={() => setCatOpen(!catOpen)}
                                        className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-left transition-all duration-300 flex justify-between items-center
                                          ${catOpen ? "border-[#c8a97a] shadow-[0_0_0_3px_rgba(200,169,122,0.15)]" : "border-white/10"}
                                          ${fieldState.error ? "border-red-400/60" : ""}`}
                                      >
                                        <div>
                                          {selectedCategory ? (
                                            <>
                                              <span className="block text-[11px] text-[#c8a97a] uppercase tracking-[0.15em] font-semibold mb-0.5">Category</span>
                                              <span className="text-white text-base">{selectedCategory}</span>
                                            </>
                                          ) : (
                                            <span className="text-white/40 text-base">Category of Interest</span>
                                          )}
                                        </div>
                                        <motion.span
                                          animate={{ rotate: catOpen ? 180 : 0 }}
                                          className="text-white/40"
                                        >
                                          ▾
                                        </motion.span>
                                      </button>
                                      <AnimatePresence>
                                        {catOpen && (
                                          <motion.div
                                            initial={{ opacity: 0, y: -8, scaleY: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                            exit={{ opacity: 0, y: -8, scaleY: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ transformOrigin: "top" }}
                                            className="absolute top-full mt-2 left-0 right-0 bg-[#1a0a0a] border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl"
                                          >
                                            {CATEGORIES.map((cat, i) => (
                                              <motion.button
                                                key={cat}
                                                type="button"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.04 }}
                                                onClick={() => { setSelectedCategory(cat); field.onChange(cat); setCatOpen(false); }}
                                                className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-[#8B1A1A]/30 transition-colors text-sm border-b border-white/5 last:border-0"
                                              >
                                                {cat}
                                              </motion.button>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                      {fieldState.error && (
                                        <p className="text-red-400 text-xs mt-1 ml-1">{fieldState.error.message}</p>
                                      )}
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </motion.div>

                          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field, fieldState }) => (
                                <FormItem>
                                  <FormControl>
                                    <FloatingTextarea label="Your Message" error={fieldState.error?.message} {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </motion.div>

                          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
                            <motion.button
                              type="submit"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.97 }}
                              className="w-full bg-gradient-to-r from-[#8B1A1A] to-[#b52525] hover:from-[#7a1515] hover:to-[#9e2020] text-white rounded-xl py-4 font-semibold text-base flex items-center justify-center gap-3 shadow-lg shadow-[#8B1A1A]/30 transition-all"
                            >
                              <Send className="w-4 h-4" />
                              SEND VIA WHATSAPP
                            </motion.button>
                          </motion.div>
                        </form>
                      </Form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 px-4 border-t border-white/10"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "20+", label: "Years of Service" },
              { num: "5000+", label: "Happy Customers" },
              { num: "500+", label: "Products Available" },
              { num: "2", label: "Showroom Locations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-[#c8a97a] mb-2">{stat.num}</p>
                <p className="text-white/50 text-sm uppercase tracking-wider font-sans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
