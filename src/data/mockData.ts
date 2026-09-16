import type { Difficulty, Tier } from "../../design-system/components";

export interface Game {
  id: string;
  title: string;
  category: string;
  tier: Tier;
  difficulty: Difficulty;
  playTime: number;
  xpReward: number;
  progress?: number;
  locked?: boolean;
  icon: string;
}

export interface Achievement {
  id: string;
  label: string;
  glyph: string;
  locked: boolean;
  progress?: number;
}

export interface RecommendedGame extends Game {
  recommendationReason: string;
}

export const userProfile = {
  name: "Zeynep",
  level: 7,
  totalXp: 2480,
  streak: 6,
  dailyGoal: { done: 3, target: 5 },
};

export const weeklyProgress = [
  { day: "Pzt", xp: 320 },
  { day: "Sal", xp: 450 },
  { day: "Çar", xp: 280 },
  { day: "Per", xp: 510 },
  { day: "Cum", xp: 390 },
  { day: "Cmt", xp: 600 },
  { day: "Paz", xp: 0 },
];

export const streakDays = [
  { day: "Pzt", completed: true },
  { day: "Sal", completed: true },
  { day: "Çar", completed: true },
  { day: "Per", completed: true },
  { day: "Cum", completed: true },
  { day: "Cmt", completed: true },
  { day: "Paz", completed: false },
];

export const continuePlaying: Game = {
  id: "hafiza-adalari",
  title: "Hafıza Adaları",
  category: "Hafıza",
  tier: "free",
  difficulty: "medium",
  playTime: 10,
  xpReward: 120,
  progress: 65,
  icon: "memory",
};

export const games: Game[] = [
  {
    id: "desen-ustasi",
    title: "Desen Ustası",
    category: "Örüntü",
    tier: "free",
    difficulty: "medium",
    playTime: 8,
    xpReward: 100,
    icon: "pattern",
  },
  {
    id: "sayi-piramidi",
    title: "Sayı Piramidi",
    category: "Matematik",
    tier: "free",
    difficulty: "easy",
    playTime: 5,
    xpReward: 80,
    icon: "math",
  },
  {
    id: "kelime-avlisi",
    title: "Kelime Avı",
    category: "Kelime",
    tier: "free",
    difficulty: "easy",
    playTime: 6,
    xpReward: 90,
    icon: "word",
  },
  {
    id: "satranc-bulmaca",
    title: "Strateji Lab",
    category: "Strateji",
    tier: "premium",
    difficulty: "hard",
    playTime: 15,
    xpReward: 200,
    icon: "strategy",
  },
  {
    id: "nisanci-refleks",
    title: "Nişancı Refleks",
    category: "Dikkat",
    tier: "free",
    difficulty: "easy",
    playTime: 4,
    xpReward: 60,
    icon: "focus",
  },
  {
    id: "mantik-kapilari",
    title: "Mantık Kapıları",
    category: "Mantık",
    tier: "premium",
    difficulty: "hard",
    playTime: 12,
    xpReward: 180,
    locked: true,
    icon: "logic",
  },
  {
    id: "renk-firtinasi",
    title: "Renk Fırtınası",
    category: "Dikkat",
    tier: "free",
    difficulty: "medium",
    playTime: 7,
    xpReward: 110,
    icon: "color",
  },
  {
    id: "sekil-tanima",
    title: "Şekil Hafızası",
    category: "Hafıza",
    tier: "free",
    difficulty: "easy",
    playTime: 5,
    xpReward: 70,
    icon: "shape",
  },
];

export const recommendedGames: RecommendedGame[] = [
  {
    ...games[0],
    recommendationReason: "Örüntü tanımada başarılı olduğun için seçildi",
  },
  {
    ...games[3],
    recommendationReason: "Seviye 7'ye uygun, yeni bir meydan okuma",
  },
  {
    ...games[6],
    recommendationReason: "Dikkat becerini geliştirmek için ideal",
  },
];

export const achievements: Achievement[] = [
  { id: "ilk-adim", label: "İlk Adım", glyph: "1", locked: false },
  { id: "hafiza-ustasi", label: "Hafıza Ustası", glyph: "M", locked: false },
  { id: "seri-7", label: "7 Günlük Seri", glyph: "7", locked: false },
  { id: "mantik-kâşifi", label: "Mantık Kâşifi", glyph: "?", locked: true, progress: 60 },
];

export const categories = [
  "Tümü",
  "Dikkat",
  "Hafıza",
  "Mantık",
  "Matematik",
  "Kelime",
  "Strateji",
  "Örüntü",
];

export const trustPillars = [
  {
    icon: "shield",
    title: "Yaşa Uygun İçerik",
    description: "Her oyun, yaş bantlarına göre uzmanlarca seçilir.",
  },
  {
    icon: "lock",
    title: "Güvenli Deneyim",
    description: "Reklamsız, takip kodu olmayan, güvenli bir ortam.",
  },
  {
    icon: "brain",
    title: "Eğitici Odak",
    description: "Her oyun bir bilişsel beceriyi hedefler.",
  },
  {
    icon: "chart",
    title: "Gelişim Takibi",
    description: "İlerlemeyi gör, haftalık raporları incele.",
  },
];
