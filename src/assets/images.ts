// Büşra Şerif Oruç Sanat Portföyü
// Orijinal Eserler

export const IMAGES = {
  // Büşra Şerif Oruç'un Tabloları
  ARTWORK_1: "/artworks/adalet.jpg",
  ARTWORK_2: "/artworks/mail.jpg",
  ARTWORK_3: "/artworks/prtf1.jpg",
  ARTWORK_4: "/artworks/prtf2.jpg",
  ARTWORK_5: "/artworks/prtf3.jpg",
  
  // Profil ve Arka Plan Görselleri (Genel Sanat)
  ARTIST_PORTRAIT_1: "https://ibb.co/bgc7m9Hn",
  ARTIST_PORTRAIT_2: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1920",
  
  // Atölye Görselleri
  ARTIST_STUDIO_1: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1920",
  ARTIST_STUDIO_2: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1920",
  
  // Sergi Görselleri
  EXHIBITION_1: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=1920",
  EXHIBITION_2: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?q=80&w=1920",
  EXHIBITION_3: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=1920",
  
  // Ana Sayfa Arka Plan
  HERO_BACKGROUND: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1920",
} as const;

export type ImageKey = keyof typeof IMAGES;
