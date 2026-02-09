import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Calendar, MapPin, Sparkles } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS, artworks, exhibitions } from "@/lib/index";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";

const springPresets = {
  gentle: { stiffness: 300, damping: 35 },
  smooth: { stiffness: 200, damping: 40 },
};

/**
 * Homepage for Artist Büşra Oruç
 * Features a vibrant hero section, featured gallery preview, and artist narrative.
 */
export default function Home() {
  const featuredArtworks = artworks.slice(0, 3);
  const activeExhibition = exhibitions.find(e => e.status === "Devam Ediyor") || exhibitions[0];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section - Vibrant and Modern Atelier Aesthetic */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.ARTIST_STUDIO_1} 
            alt="Büşra Oruç Stüdyo"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.smooth, duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 text-primary font-mono mb-6 tracking-[0.2em] uppercase text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" /> 2026 Koleksiyonu
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-[0.9]">
              Ruhun <span className="text-primary">Renkli</span> <br />
              <span className="italic font-light">Yansımaları</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Büşra Oruç'un fırçasından çıkan modern soyutlamalar, her bir eserde yeni bir hikaye, yeni bir duygu ve sonsuz bir enerji sunuyor.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-semibold shadow-xl hover:scale-105 transition-transform">
                <Link to={ROUTE_PATHS.GALLERY}>Galeriyi Keşfet</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-semibold border-primary/20 hover:bg-primary/5">
                <Link to={ROUTE_PATHS.ABOUT}>Sanatçı Hikayesi</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle Decorative Element */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Kaydırın</span>
          <div className="w-px h-12 bg-primary/40" />
        </motion.div>
      </section>

      {/* Featured Artworks Section - Masonry-like Preview */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Öne Çıkan Eserler</h2>
            <p className="text-muted-foreground max-w-lg">
              En son çalışmalarım arasından seçilen, renk ve formun uyumunu en iyi yansıtan özel bir seçki.
            </p>
          </div>
          <Button asChild variant="link" className="group text-primary text-lg p-0 h-auto font-bold">
            <Link to={ROUTE_PATHS.GALLERY} className="flex items-center gap-2">
              Tüm Koleksiyonu Gör <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredArtworks.map((artwork, idx) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springPresets.gentle, delay: idx * 0.15 }}
            >
              <ArtworkCard artwork={artwork} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artist Narrative Section - Personal Touch */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-accent/30 -z-10 skew-y-1 transform origin-top-left" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.smooth}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-card">
                <img 
                  src={IMAGES.ABSTRACT_ART_2} 
                  alt="Büşra Oruç Sanat Eseri" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stat/Detail */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-3xl shadow-2xl max-w-[240px]"
              >
                <Palette className="w-10 h-10 mb-4" />
                <p className="text-lg font-medium leading-snug">
                  "Her fırça darbesi, ruhun görünmeyen derinliklerine açılan bir penceredir."
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.smooth}
              className="flex flex-col gap-8"
            >
              <h2 className="text-5xl font-bold leading-tight">Büşra Oruç: <br /> Sanatın Özgür Ritmi</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sanat yolculuğum, renklerin ve formların sessiz dilini keşfetmekle başladı. Eserlerimde geleneksel teknikleri modern bir vizyonla harmanlayarak, izleyiciyi alışılmışın dışında bir görsel deneyime davet ediyorum.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Doğanın enerjisi, şehir hayatının karmaşası ve insanın içsel dünyası benim en büyük ilham kaynaklarım. Her eserim, o anki duygunun tuvale dökülmüş, dondurulmuş bir halidir.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" variant="outline" className="rounded-full px-12 h-14 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  <Link to={ROUTE_PATHS.ABOUT}>Hikayemin Devamı</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exhibition Highlight - Event Focus */}
      <section className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springPresets.smooth}
          className="bg-foreground text-background rounded-[3rem] p-10 md:p-20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-30 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-50 hidden md:block">
            <img src={activeExhibition.imageUrl} alt="Sergi Görseli" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-5 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-widest">
              <Calendar className="w-4 h-4" /> {activeExhibition.status}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">{activeExhibition.title}</h2>
            
            <p className="text-xl text-background/70 mb-10 leading-relaxed">
              {activeExhibition.description}
            </p>
            
            <div className="flex flex-col gap-5 mb-12">
              <div className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold">{activeExhibition.location}</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <span>{activeExhibition.date}</span>
              </div>
            </div>
            
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-12 h-16 text-lg">
              <Link to={ROUTE_PATHS.EXHIBITIONS}>Sergi Takvimi</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section - Final Connection */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center py-20 border-t border-border">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Yeni Bir Eser, Yeni Bir Hikaye</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Atölyemdeki son çalışmaları takip etmek, özel siparişler veya sergi işbirlikleri için benimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="rounded-full px-16 h-16 text-lg w-full md:w-auto">
              <Link to={ROUTE_PATHS.CONTACT}>İletişime Geçin</Link>
            </Button>
            <span className="text-muted-foreground font-mono">veya</span>
            <Button asChild variant="outline" size="lg" className="rounded-full px-16 h-16 text-lg w-full md:w-auto">
              <Link to={ROUTE_PATHS.GALLERY}>Koleksiyonu İnceleyin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
