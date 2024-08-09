import MorseCodeConverter from "./morsecode/MorseCodeConverter";
import SvgToCssBackground from "./svgToCssConvertor/svgToCssBackground";
const projectsData = [
  {
    id: 1,
    title: "Text to Morse Code",
    image: "/assets/images/morseCode/LetterR.jpg",
    alt: "Morse Code",
    component: MorseCodeConverter,
    tags: ["React"],
  },
  {
    id: 2,
    title: "Sorting Algorithm Visualizer",
    image: "/assets/images/SortingVisualizer/SortingAlgorithmVisualizer.jpg",
    alt: "Sorting Visualizer",
    url: "https://github.com/ratamranjith/DataStructures/tree/fdcb96f25f67947e58bba8abe0cd78e4f4675fc5/Animations/Sorting",
    tags: ["Python", "gui"],
  },
  {
    id: 3,
    title: "Folder and File Size Explorer",
    image: "/assets/images/SortingVisualizer/SortingAlgorithmVisualizer.jpg",
    alt: "Sorting Visualizer",
    url: "https://github.com/ratamranjith/DataStructures/tree/373246b5c6f23b1a893fc34dcb3ebb329ea642ee/Animations/Sorting",
    tags: ["Python", "gui"],
  },
  {
    id: 4,
    title: "SVG to CSS Convertor",
    image: "/assets/images/svgToCss/svgToCss.png",
    alt: "Svg2Css",
    component: SvgToCssBackground,
    tags: ["React"],
  },

  // Add more projects here
];

export default projectsData;
