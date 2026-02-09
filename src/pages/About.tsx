import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/assets/images";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

const milestones = [
  {
    year: "2022",
    title: "Akademik Mezuniyet",
    description: "Kırıkkale Üniversitesi Güzel Sanatlar Fakültesi Resim Bölümü'nden mezuniyet."
  },
  {
    year: "2022-2023",
    title: "Pedagojik Formasyon",
    description: "Gazi Üniversitesi'nde pedagojik formasyon eğitimini tamamlama."
  },
  {
    year: "2023-2026",
    title: "Eğitim Deneyimi",
    description: "Ankara'daki çeşitli okullarda Görsel Sanatlar Öğretmeni olarak görev alma."
  },
  {
    year: "2024-2026",
    title: "Sanatsal Üretim",
    description: "Birçok karma ve bireysel sergiye katılım, figüratif anlatım odaklı eserler."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center md:text-left">
            <span className="font-mono text-sm uppercase tracking-widest text-primary mb-4 block">
              Ressamın Hikayesi
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Büşra Oruç
            </h1>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Renklerin enerjisini ve formların sessiz dilini kullanarak,
              izleyiciyi duygu yüklü bir yolculuğa davet ediyorum.
            </p>
          </motion.div>

          {/* Main Portrait & Bio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
            <motion.div 
              variants={fadeInUp}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.ARTIST_PORTRAIT_1} 
                alt="Büşra Oruç Portre" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Sanat Yolculuğum</h2>
                <p className="text-muted-foreground leading-relaxed">
                  1998 doğumlu Büşra Ş. Oruç, Kırıkkale Üniversitesi Güzel Sanatlar Fakültesi Resim Bölümü'nden 2022 yılında mezun olmuş, ardından Gazi Üniversitesi'nde pedagojik formasyon eğitimini tamamlamıştır.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ankara'daki çeşitli okullarda Görsel Sanatlar Öğretmeni olarak görev yapmış, sanat eğitiminde rehberlik, sergi organizasyonu ve öğrenci portfolyo yönetimi konularında deneyim kazanmıştır.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Yağlı boya, akrilik, karakalem ve sulu boya gibi tekniklerde çalışmalar üreten Oruç, birçok karma ve bireysel sergiye katılmıştır.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-2xl border border-accent/20">
                <h3 className="font-semibold text-lg mb-2">Sanatsal Yaklaşımım</h3>
                <p className="text-sm text-accent-foreground italic">
                  Sanatsal üretimlerinde figüratif anlatımı güçlü bir ifade diliyle ele alır; kimlik, kadın, çocuklar, güç ve içsel çatışmalar temaları çalışmalarının merkezinde yer alır. Farklı teknik ve yüzeylerle çalışan sanatçı, özgün renk kullanımı ve dramatik kompozisyonlarıyla dikkat çeker. Eserlerinde insanın iç dünyasını, toplumsal değerleri ve duygusal derinliği konu edinmektedir.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Studio Section */}
          <motion.div 
            variants={fadeInUp}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-24 shadow-xl group"
          >
            <img 
              src={IMAGES.ARTIST_STUDIO_1} 
              alt="Büşra Oruç Atölyesi" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
              <div className="text-center max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Atölye ve Süreç
                </h2>
                <p className="text-white/80">
                  Yağlı boya, akrilik, karakalem ve sulu boya teknikleriyle çalıştığım atölyem,
                  figüratif anlatımın güçlü ifade diliyle buluştuğu yaratım alanım.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline / Milestones */}
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              Eğitim ve Kariyer
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((item, index) => (
                <motion.div 
                  key={item.year}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  className="bg-card p-8 rounded-xl border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                >
                  <span className="font-mono text-primary font-bold text-lg">{item.year}</span>
                  <h4 className="text-xl font-bold mt-2 mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <motion.div 
            variants={fadeInUp}
            className="mt-32 text-center py-16 border-t border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Yaratım Sürecine Ortak Olun</h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Eserlerim hakkında daha fazla bilgi almak veya bir projede iş birliği yapmak isterseniz,
              benimle iletişime geçmekten çekinmeyin.
            </p>
            <motion.a
              href="/iletisim"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-colors hover:bg-primary/90"
            >
              İletişime Geç
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
