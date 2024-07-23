import MorseCodeConverter from "./morsecode/MorseCodeConverter";
const projectsData = [
  {
    id: 1,
    title: "Text to Morse Code",
    image: "/assets/images/morseCode/LetterR.jpg",
    alt: "Morse Code",
    component: MorseCodeConverter,
    tags: ["Python", "React"],
  },
  {
    id: 2,
    title: "Sorting Algorithm Visualizer",
    image: "/assets/images/SortingVisualizer/SortingAlgorithmVisualizer.jpg",
    alt: "Sorting Visualizer",
    url: "https://github.com/ratamranjith/DataStructures/tree/373246b5c6f23b1a893fc34dcb3ebb329ea642ee/Animations/Sorting",
    tags: ["Python", "gui"],
  },
  // Add more projects here
];

export default projectsData;
