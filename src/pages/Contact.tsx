import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Linkedin, 
  Twitter 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { IMAGES } from "@/assets/images";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Lütfen geçerli bir isim giriniz." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi giriniz." }),
  subject: z.string().min(5, { message: "Konu en az 5 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    
    toast({
      title: "Mesajınız Alındı",
      description: "En kısa sürede size dönüş yapacağım. İlginiz için teşekkürler.",
    });
    
    reset();
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            İletişime <span className="text-primary">Geçin</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bir sergi teklifi, eser alımı veya sadece sanat üzerine sohbet etmek için bana her zaman yazabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={IMAGES.ARTIST_STUDIO_2} 
                alt="Büşra Oruç Atölye" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-primary font-mono text-sm tracking-widest uppercase">Atölye Vizyonu</p>
                <h3 className="text-white text-2xl font-semibold">Yaratıcılığın Merkezi</h3>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">E-posta</h4>
                  <p className="text-muted-foreground">byro32_06@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg text-accent-foreground">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Telefon</h4>
                  <p className="text-muted-foreground">+90 538 479 13 13</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-secondary-foreground">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Konum</h4>
                  <p className="text-muted-foreground">Ankara</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-secondary-foreground">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Sosyal Medya</h4>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="hover:text-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full -ml-16 -mb-16 blur-3xl" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input
                    id="name"
                    placeholder="Büşra Oruç"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="busra@örnek.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Konu</Label>
                <Input
                  id="subject"
                  placeholder="Hangi konuda görüşmek istersiniz?"
                  {...register("subject")}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea
                  id="message"
                  placeholder="Fikirlerinizi, sorularınızı veya tekliflerinizi buraya yazabilirsiniz..."
                  className={`min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-medium group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Gönderiliyor...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Mesajı Gönder
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Section or Additional Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-3xl overflow-hidden h-[400px] relative border border-border shadow-inner"
        >
          <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-primary animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ziyaret Edin</h3>
              <p className="text-muted-foreground">Atölye ziyaretleri için lütfen önceden randevu alınız.</p>
            </div>
          </div>
          {/* Placeholder for real map if needed */}
          <div className="w-full h-full grayscale opacity-40 pointer-events-none">
             <img 
              src={IMAGES.ARTIST_STUDIO_1} 
              alt="Location Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
