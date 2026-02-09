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
