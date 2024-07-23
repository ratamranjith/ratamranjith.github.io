import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById("custom-cursor");
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="w-5 h-5 bg-red-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition duration-100"
    ></div>
  );
};

export default CustomCursor;
