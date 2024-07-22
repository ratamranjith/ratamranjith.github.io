// src/projects/morsecode/morseCode.js

const morseCodeMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
};

const textToMorse = (text) => {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseCodeMap[char] || "#") // Return '#' for untranslatable characters
    .join(" ");
};

const reverseMorseCodeMap = Object.fromEntries(
  Object.entries(morseCodeMap).map(([letter, code]) => [code, letter])
);

const morseToText = (morse) => {
  return morse
    .split(" ")
    .map((code) => reverseMorseCodeMap[code] || "#") // Return '#' for untranslatable Morse code
    .join("");
};

export { morseCodeMap, reverseMorseCodeMap, textToMorse, morseToText };
