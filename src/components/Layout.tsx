import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Mail, ChevronRight, Palette } from "lucide-react";
import { ROUTE_PATHS } from "@/lib/index";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Ana Sayfa", path: ROUTE_PATHS.HOME },
    { name: "Galeri", path: ROUTE_PATHS.GALLERY },
    { name: "Sergiler", path: ROUTE_PATHS.EXHIBITIONS },
    { name: "Hakkımda", path: ROUTE_PATHS.ABOUT },
    { name: "İletişim", path: ROUTE_PATHS.CONTACT },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to={ROUTE_PATHS.HOME}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform duration-300">
              <Palette size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-foreground">
              BÜŞRA ORUÇ
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-background pt-24 px-6"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "text-2xl font-semibold flex items-center justify-between",
                        isActive ? "text-primary" : "text-foreground"
                      )
                    }
                  >
                    {item.name}
                    <ChevronRight size={20} className="text-primary" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-12 border-t flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:iletisim@busraoruc.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  <Palette size={18} />
                </div>
                <span className="text-lg font-bold tracking-tighter">BÜŞRA ORUÇ</span>
              </Link>
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                Modern sanatın renkli ve dinamik dünyasında, her fırça darbesiyle yeni bir hikaye anlatıyorum. 
                Eserlerimde doğanın ritmini ve soyutlamanın özgürlüğünü bulabilirsiniz.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="mailto:iletisim@busraoruc.com" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Hızlı Bağlantılar</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter/Contact */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">İletişim & Güncellemeler</h4>
              <p className="text-muted-foreground">
                Sergi duyuruları ve yeni eserlerimden haberdar olmak için bana ulaşın.
              </p>
              <div className="pt-2">
                <p className="text-foreground font-medium">İstanbul, Türkiye</p>
                <p className="text-muted-foreground text-sm">© 2026 Tüm Hakları Saklıdır.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Tasarlayan & Geliştiren: Modern Atelier 2026
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary">Gizlilik Politikası</a>
              <a href="#" className="hover:text-primary">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
