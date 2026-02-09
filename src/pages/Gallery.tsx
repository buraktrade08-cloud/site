import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Filter, Search } from "lucide-react";
import { artworks, Artwork } from "@/lib/index";
import { ArtworkCard } from "@/components/ArtworkCard";
import { springPresets } from "@/lib/motion";

const CATEGORIES = ["Hepsi", "Soyut", "Modern", "Doğa", "Figüratif"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Hepsi");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesCategory = 
        activeCategory === "Hepsi" || artwork.category === activeCategory;
      const matchesSearch = 
        artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artwork.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <LayoutGrid size={16} />
              Sanat Koleksiyonu
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Eser <span className="text-primary italic underline decoration-accent/30">Galerisi</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Büşra Oruç'un renklerle, dokularla ve duygularla örülmüş dünyasına hoş geldiniz. 
              Burada, 2026 yılına kadar uzanan sanatsal evrimin en seçkin örneklerini bulabilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls: Search & Filters */}
      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-y border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
              <Filter size={18} className="text-muted-foreground mr-2 shrink-0" />
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Eser adı veya tema ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {filteredArtworks.length > 0 ? (
            <motion.div 
              layout
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredArtworks.map((artwork: Artwork) => (
                  <motion.div
                    key={artwork.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={springPresets.snappy}
                    className="break-inside-avoid"
                  >
                    <ArtworkCard artwork={artwork} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eser Bulunamadı</h3>
              <p className="text-muted-foreground">
                Aradığınız kriterlere uygun bir eser bulunmuyor. Lütfen farklı bir kategori veya arama terimi deneyin.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("Hepsi");
                  setSearchQuery("");
                }}
                className="mt-6 text-primary font-medium hover:underline"
              >
                Tüm Eserleri Göster
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action Footer Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Beğendiğiniz bir eser mi var?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Eserler hakkında daha fazla bilgi almak, özel sipariş vermek veya güncel katalog talebinde bulunmak için benimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/iletisim"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all"
            >
              İletişime Geç
            </a>
            <a
              href="/sergiler"
              className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all"
            >
              Sergileri Gör
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
