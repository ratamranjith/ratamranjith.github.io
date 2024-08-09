import React, { useState } from "react";
import "./Modal.css";

const SvgToCssBackground = () => {
  const [svgContent, setSvgContent] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSvgContent(e.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid SVG file.");
    }
  };

  const handleSvgPaste = (event) => {
    setSvgContent(event.target.value);
  };

  const generateCss = () => {
    if (svgContent.trim() === "") {
      alert("Please provide valid SVG content.");
      return;
    }
    const encodedSvg = encodeURIComponent(svgContent)
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");
    const cssString = `background-image: url('data:image/svg+xml;charset=UTF-8,${encodedSvg}');`;
    setCssContent(cssString);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssContent).then(
      () => {
        alert("CSS copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div>
      <h2>Upload or Paste SVG</h2>
      <input type="file" accept=".svg" onChange={handleFileUpload} />
      <textarea
        placeholder="Paste your SVG code here..."
        onChange={handleSvgPaste}
      />
      <button onClick={generateCss} className="generate-button">
        Generate
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Generated CSS</h2>
            <textarea value={cssContent} readOnly />

            <button onClick={copyToClipboard} className="copy-button">
              Copy to Clipboard
            </button>

            <h3>SVG Preview</h3>
            <div
              className="svg-preview"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SvgToCssBackground;
