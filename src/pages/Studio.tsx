import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/assets/images";
import { Palette, Sparkles, Users, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Studio() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm mb-6">
              Yakında
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Yeni Atölye
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sanatın ve yaratıcılığın buluşacağı yeni bir alan oluşturuyorum.
              Kısa süre içinde açılacak atölyemde sanat eğitimleri, atölye çalışmaları ve özel dersler sunacağım.
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            variants={fadeInUp}
            className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden mb-16 shadow-2xl group"
          >
            <img
              src={IMAGES.ARTIST_STUDIO_1}
              alt="Sanat Atölyesi"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Yaratıcılığın Merkezi
              </h2>
              <p className="text-white/90 text-lg max-w-2xl">
                Yağlı boya, akrilik, karakalem ve sulu boya teknikleriyle çalışabileceğiniz,
                sanatsal gelişiminizi destekleyeceğim profesyonel bir atölye ortamı.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Palette,
                title: "Sanat Eğitimleri",
                description: "Temel resim tekniklerinden ileri düzey uygulamalara kadar geniş eğitim programları",
              },
              {
                icon: Users,
                title: "Grup Çalışmaları",
                description: "Diğer sanat tutkunlarıyla birlikte çalışabileceğiniz atölye oturumları",
              },
              {
                icon: Sparkles,
                title: "Özel Dersler",
                description: "Kişisel hedeflerinize özel birebir sanat dersleri ve mentorluk",
              },
              {
                icon: Calendar,
                title: "Esnek Program",
                description: "Hafta içi ve hafta sonu, farklı zaman dilimlerinde uygun seçenekler",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary/10 to-primary/5 p-10 rounded-3xl border border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-4">Kimler Katılabilir?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atölyem tüm seviyelere açıktır. Resme yeni başlayanlardan deneyimli sanatçılara,
                çocuklardan yetişkinlere kadar herkes katılabilir. Her yaş grubuna ve seviyeye
                uygun özel programlar hazırlanacaktır.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-accent/20 to-accent/10 p-10 rounded-3xl border border-accent/20"
            >
              <h3 className="text-2xl font-bold mb-4">Neler Öğreneceksiniz?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Temel resim teknikleri (yağlı boya, akrilik, karakalem, sulu boya)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Kompozisyon ve renk teorisi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Figüratif ve soyut resim uygulamaları
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Kişisel sanat portföyü oluşturma
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-card border border-border rounded-3xl p-12 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Haberdar Olmak İster Misiniz?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Atölyenin açılış tarihi ve kayıt detayları hakkında bilgi almak için
              benimle iletişime geçebilirsiniz.
            </p>
            <motion.a
              href="/iletisim"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              İletişime Geçin
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
