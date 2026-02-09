import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight, Info } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { exhibitions, Exhibition } from "@/lib/index";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const statusColors: Record<Exhibition["status"], string> = {
  "Devam Ediyor": "bg-accent text-accent-foreground border-accent/20",
  "Gelecek": "bg-primary text-primary-foreground border-primary/20",
  "Geçmiş": "bg-muted text-muted-foreground border-border",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Exhibitions() {
  const sortedExhibitions = [...exhibitions].sort((a, b) => {
    const statusOrder = { "Devam Ediyor": 0, Gelecek: 1, "Geçmiş": 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="min-h-screen pb-24">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.GALLERY_INTERIOR_2}
            alt="Sergi Salonu"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Sergiler & <span className="text-primary">Etkinlikler</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            Büşra Oruç'un sanatsal yolculuğuna tanıklık edebileceğiniz güncel ve geçmiş sergiler.
          </motion.p>
        </div>
      </section>

      <main className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {sortedExhibitions.map((exhibition) => (
            <motion.div key={exhibition.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-none bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                <CardContent className="p-0 flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img
                      src={exhibition.imageUrl}
                      alt={exhibition.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge
                      className={`absolute top-4 left-4 border ${statusColors[exhibition.status]} shadow-lg backdrop-blur-md`}
                    >
                      {exhibition.status}
                    </Badge>
                  </div>

                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-primary">
                        <Info size={16} />
                        <span className="text-xs font-mono uppercase tracking-widest">Sergi Detayı</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {exhibition.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                        {exhibition.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-border/50">
                      <div className="flex items-center text-sm gap-3 text-foreground/80">
                        <Calendar size={16} className="text-primary" />
                        <span className="font-medium">{exhibition.date}</span>
                      </div>
                      <div className="flex items-center text-sm gap-3 text-foreground/80">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-medium">{exhibition.location}</span>
                      </div>
                      <button className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all">
                        Detayları Gör <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden"
        >
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Sanatçıyı Atölyesinde Ziyaret Edin</h2>
              <p className="text-muted-foreground">
                Sergiler dışında Büşra Oruç'un üretim sürecini yakından görmek ve eserler hakkında birebir bilgi almak
                için atölye ziyaretleri için randevu oluşturabilirsiniz.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              Randevu Al
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
