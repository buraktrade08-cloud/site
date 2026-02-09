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
  STUDIO: "/atolye",
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
 * Büşra Şerif Oruç Sanat Portföyü - Eserler
 */
export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Adalet",
    description: "Figüratif anlatımın güçlü bir ifade diliyle ele alındığı, adalet temasını işleyen özgün bir eser.",
    category: "Figüratif",
    imageUrl: IMAGES.ARTWORK_1,
    year: 2024,
    dimensions: "Yağlı boya",
  },
  {
    id: "2",
    title: "İç Yolculuk",
    description: "İnsanın iç dünyasını ve duygusal derinliğini konu eden, güçlü bir kompozisyon.",
    category: "Figüratif",
    imageUrl: IMAGES.ARTWORK_2,
    year: 2024,
    dimensions: "Akrilik",
  },
  {
    id: "3",
    title: "Portre I",
    description: "Kimlik ve kadın temasını işleyen, dramatik ışık kullanımıyla dikkat çeken bir çalışma.",
    category: "Figüratif",
    imageUrl: IMAGES.ARTWORK_3,
    year: 2024,
    dimensions: "Yağlı boya",
  },
  {
    id: "4",
    title: "Portre II",
    description: "İnsan figürünün özgün renk kullanımı ve duygusal yoğunlukla aktarıldığı bir eser.",
    category: "Figüratif",
    imageUrl: IMAGES.ARTWORK_4,
    year: 2024,
    dimensions: "Yağlı boya",
  },
  {
    id: "5",
    title: "Portre III",
    description: "Figüratif anlatımın farklı bir bakış açısıyla yorumlandığı, çarpıcı bir kompozisyon.",
    category: "Figüratif",
    imageUrl: IMAGES.ARTWORK_5,
    year: 2024,
    dimensions: "Yağlı boya",
  },
];

/**
 * Büşra Şerif Oruç - Sergi Geçmişi
 */
export const exhibitions: Exhibition[] = [
  {
    id: "e1",
    title: "TURAN EROL 1. SANAT ÖDÜLLERİ",
    location: "Ankara",
    date: "13 Şubat 2026",
    description: "Türk sanatının önemli isimlerinin bir araya geldiği prestijli sanat ödülleri etkinliği.",
    imageUrl: IMAGES.EXHIBITION_1,
    status: "Gelecek",
  },
  {
    id: "e2",
    title: "Karma Resim Sergisi",
    location: "Agora Sanat Galerisi, Ankara",
    date: "2024",
    description: "Ankara'nın önde gelen genç sanatçılarının eserlerinin sergilendiği karma resim sergisi.",
    imageUrl: IMAGES.EXHIBITION_2,
    status: "Geçmiş",
  },
  {
    id: "e3",
    title: "Şiddetsiz Bir Toplum İçin Sanat İle El Ele",
    location: "Neşet Ertaş Kültür ve Sanat Merkezi, Ankara",
    date: "2024",
    description: "Toplumsal farkındalık yaratmak amacıyla düzenlenen özel resim sergisi.",
    imageUrl: IMAGES.EXHIBITION_3,
    status: "Geçmiş",
  },
];
"Contemporary Istanbul, Galeri No:12",
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
