import React, { useState } from "react";
import { textToMorse, morseToText } from "./morseCode";

const MorseCodeConverter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isTextToMorse, setIsTextToMorse] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (isTextToMorse) {
      setOutput(textToMorse(value));
    } else {
      setOutput(morseToText(value));
    }
  };

  const handleToggle = () => {
    setIsTextToMorse(!isTextToMorse);
    setInput("");
    setOutput("");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-lg font-medium text-gray-900 dark:text-white">
          {isTextToMorse ? "Enter Text:" : "Enter Morse Code:"}
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          rows="4"
          value={input}
          onChange={handleInputChange}
          placeholder={
            isTextToMorse ? "Type text here..." : "Type Morse code here..."
          }
        />
      </div>

      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Switch to {isTextToMorse ? "Morse to Text" : "Text to Morse"}
      </button>

      <div>
        <label className="block text-lg font-medium text-gray-900 dark:text-white">
          {isTextToMorse ? "Morse Code:" : "Text:"}
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          rows="4"
          value={output}
          readOnly
        />
      </div>
    </div>
  );
};

export default MorseCodeConverter;
