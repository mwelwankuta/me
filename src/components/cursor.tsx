import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.x, y: e.y });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-1 w-72 h-72 bg-orange-400 blur-3xl opacity-15 rounded-full pointer-events-none transform transition-transform duration-75 ring-offset-8"
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
