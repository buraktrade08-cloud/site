import { IMAGES } from "@/assets/images";

/**
 * Application Route Constants
 */
export const ROUTE_PATHS = {
  HOME: "/",
  GALLERY: "/galeri",
  EXHIBITIONS: "/sergiler",
  ABOUT: "/hakkimda",
  CONTACT: "/iletisim",
} as const;

/**
 * Artwork Data Model
 */
export interface Artwork {
  id: string;
  title: string;
  description: string;
  category: "Soyut" | "Figüratif" | "Modern" | "Doğa";
  imageUrl: string;
  year: number;
  dimensions: string;
}

/**
 * Exhibition Data Model
 */
export interface Exhibition {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  status: "Geçmiş" | "Devam Ediyor" | "Gelecek";
}

/**
 * Mock Gallery Data for Büşra Oruç Portfolio
 */
export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Renklerin Senfonisi I",
    description: "İçsel enerjinin ve duyguların tuvale yansıyan dinamik bir dışavurumu. 2026 serisinin ilk parçası.",
    category: "Soyut",
    imageUrl: IMAGES.ABSTRACT_ART_1,
    year: 2026,
    dimensions: "120x150 cm",
  },
  {
    id: "2",
    title: "Kentsel Ritim",
    description: "Modern şehir hayatının karmaşasını ve bitmek bilmeyen enerjisini temsil eden geometrik bir yaklaşım.",
    category: "Modern",
    imageUrl: IMAGES.ABSTRACT_ART_7,
    year: 2026,
    dimensions: "100x100 cm",
  },
  {
    id: "3",
    title: "Yeryüzü Katmanları",
    description: "Toprağın dokusundan ve doğanın derinliklerinden ilham alan organik formların birleşimi.",
    category: "Doğa",
    imageUrl: IMAGES.ABSTRACT_ART_3,
    year: 2025,
    dimensions: "80x120 cm",
  },
  {
    id: "4",
    title: "Sessizliğin Yankısı",
    description: "Minimalist bir kompozisyon ile zihinsel huzuru ve dengeyi arayan meditatif bir çalışma.",
    category: "Modern",
    imageUrl: IMAGES.ABSTRACT_ART_9,
    year: 2025,
    dimensions: "110x110 cm",
  },
  {
    id: "5",
    title: "Zamanın İzleri",
    description: "Geçmişin anıları ve geleceğin umutları arasında bir köprü kuran katmanlı bir soyutlama.",
    category: "Soyut",
    imageUrl: IMAGES.ABSTRACT_ART_5,
    year: 2026,
    dimensions: "140x100 cm",
  },
  {
    id: "6",
    title: "Baharda Uyanış",
    description: "Doğanın canlanışını ve renklerin zaferini kutlayan enerjik ve canlı bir eser.",
    category: "Doğa",
    imageUrl: IMAGES.ABSTRACT_ART_10,
    year: 2026,
    dimensions: "90x90 cm",
  },
  {
    id: "7",
    title: "Işığın Dansı",
    description: "Günün farklı saatlerindeki ışık oyunlarının tuval üzerindeki modern yorumu.",
    category: "Modern",
    imageUrl: IMAGES.ABSTRACT_ART_2,
    year: 2026,
    dimensions: "100x130 cm",
  },
  {
    id: "8",
    title: "Ruhun Renkleri",
    description: "İnsanın iç dünyasındaki karmaşayı renk paletleriyle çözümleyen bir dışavurum.",
    category: "Soyut",
    imageUrl: IMAGES.ABSTRACT_ART_4,
    year: 2025,
    dimensions: "120x120 cm",
  },
];

/**
 * Mock Exhibition Data for Büşra Oruç Portfolio
 */
export const exhibitions: Exhibition[] = [
  {
    id: "e1",
    title: "Modern Vizyonlar 2026",
    location: "Contemporary Istanbul, Galeri No:12",
    date: "15 Mayıs - 30 Haziran 2026",
    description: "Büşra Oruç'un son iki yılda ürettiği en seçkin eserlerden oluşan kapsamlı solo sergisi.",
    imageUrl: IMAGES.EXHIBITION_1,
    status: "Gelecek",
  },
  {
    id: "e2",
    title: "Renklerin Gücü Karma Seçki",
    location: "Arthouse Sanat Galerisi, Nişantaşı",
    date: "10 Şubat - 20 Mart 2026",
    description: "Modern sanatın genç temsilcilerini bir araya getiren dinamik bir sergi deneyimi.",
    imageUrl: IMAGES.EXHIBITION_4,
    status: "Devam Ediyor",
  },
  {
    id: "e3",
    title: "Doğa ile Diyalog",
    location: "Beşiktaş Sanat Merkezi, İstanbul",
    date: "15 Kasım - 20 Aralık 2025",
    description: "Doğa temalı eserlerin modern bir dille yorumlandığı ve büyük ilgi gören sergi.",
    imageUrl: IMAGES.EXHIBITION_8,
    status: "Geçmiş",
  },
  {
    id: "e4",
    title: "Soyut Yaklaşımlar",
    location: "Ankara Modern Sanat Müzesi",
    date: "05 Eylül - 10 Ekim 2025",
    description: "Türkiye'nin önde gelen genç ressamlarının soyut çalışmalarını kapsayan prestijli bir sergi.",
    imageUrl: IMAGES.EXHIBITION_5,
    status: "Geçmiş",
  },
];
