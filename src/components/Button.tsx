import { useState } from "react";

interface ButtonProps {
  url: string;
  color: string;
}

function Button(props: ButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={() => {
          window.open(props.url);
        }}
        className="button"
        style={{
          border: isHovering
            ? `3px solid ${props.color}`
            : "3px solid transparent",
          color: props.color,
        }}
      >
        <p className="px-1">Open</p>
      </button>
    </div>
  );
}

export default Button;
