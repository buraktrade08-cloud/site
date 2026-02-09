import { Artwork } from "@/lib/index";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Maximize2, Calendar, Ruler, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
}

export function ArtworkCard({ artwork, className }: ArtworkCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn(
            "group relative overflow-hidden rounded-2xl bg-card border border-border cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500",
            className
          )}
        >
          {/* Resim Alanı */}
          <div className="aspect-[4/5] overflow-hidden relative">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Hover Katmanı */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Badge 
                  className="mb-3 bg-primary text-primary-foreground border-none px-3 py-1 text-xs uppercase tracking-widest font-bold"
                >
                  {artwork.category}
                </Badge>
                <h3 className="text-white text-2xl font-bold mb-2 leading-tight">{artwork.title}</h3>
                <div className="flex items-center text-white/70 text-sm gap-2 font-mono">
                  <Maximize2 size={16} className="text-primary" />
                  <span>Eseri İncele</span>
                </div>
              </motion.div>
            </div>

            {/* Sağ Üst Yıl Rozeti (Always Visible) */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border shadow-sm">
                <span className="text-[10px] font-mono font-bold text-foreground">{artwork.year}</span>
              </div>
            </div>
          </div>

          {/* Bilgi Alanı (Kartın Altı) */}
          <div className="p-5 bg-card flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors truncate">
                {artwork.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
              <span>{artwork.dimensions}</span>
              <span className="opacity-30">|</span>
              <span>{artwork.category}</span>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-background border-none rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
          {/* Görsel Bölümü */}
          <div className="lg:col-span-7 bg-muted/30 flex items-center justify-center p-6 lg:p-12 relative group/modal">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="max-h-[85vh] w-auto object-contain shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm"
              />
            </div>
          </div>

          {/* Detay Bölümü */}
          <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-center bg-card border-l border-border/50">
            <DialogHeader className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  {artwork.category}
                </Badge>
                <span className="text-muted-foreground/30 font-mono">/</span>
                <span className="text-muted-foreground font-mono text-sm tracking-tighter">ID: #00{artwork.id}</span>
              </div>
              <DialogTitle className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-2">
                {artwork.title}
              </DialogTitle>
              <p className="text-primary/80 font-mono text-lg font-medium">Büşra Oruç, {artwork.year}</p>
            </DialogHeader>

            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  {artwork.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-y border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-primary shadow-inner">
                    <Ruler size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em] mb-0.5">Eser Boyutu</p>
                    <p className="font-mono text-foreground font-semibold">{artwork.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-primary shadow-inner">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em] mb-0.5">Yapım Yılı</p>
                    <p className="font-mono text-foreground font-semibold">{artwork.year}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/40">
                <Info size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-snug">
                  Bu eser sanatçının güncel portfolyosuna aittir. Satın alma opsiyonları veya sergileme talepleri için iletişim bölümünden ulaşabilirsiniz.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                  onClick={() => window.location.href = '#contact'}
                >
                  Bilgi Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
