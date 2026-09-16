export interface PatternQuestion {
  id: string;
  prompt: string;
  sequence: string[];
  options: string[];
  answer: string;
  explanation: string;
}

export const patternQuestions: PatternQuestion[] = [
  {
    id: "shapes",
    prompt: "Sıradaki şekil hangisi?",
    sequence: ["Daire", "Kare", "Daire", "Kare", "?"],
    options: ["Üçgen", "Daire", "Kare"],
    answer: "Daire",
    explanation: "Daire ve kare sırayla tekrar ediyor.",
  },
  {
    id: "even-numbers",
    prompt: "Sıradaki sayı hangisi?",
    sequence: ["2", "4", "6", "8", "?"],
    options: ["9", "10", "12"],
    answer: "10",
    explanation: "Her adımda sayıya 2 ekleniyor.",
  },
  {
    id: "directions",
    prompt: "Ok hangi yönü göstermeli?",
    sequence: ["Yukarı", "Sağ", "Aşağı", "?"],
    options: ["Sol", "Yukarı", "Sağ"],
    answer: "Sol",
    explanation: "Ok her adımda saat yönünde çeyrek tur dönüyor.",
  },
  {
    id: "double",
    prompt: "Örüntüyü tamamla.",
    sequence: ["3", "6", "12", "24", "?"],
    options: ["36", "42", "48"],
    answer: "48",
    explanation: "Her sayı bir öncekinin iki katı.",
  },
  {
    id: "letters",
    prompt: "Sıradaki harf hangisi?",
    sequence: ["A", "C", "E", "G", "?"],
    options: ["H", "I", "J"],
    answer: "I",
    explanation: "Alfabede her seferinde bir harf atlanıyor.",
  },
];
