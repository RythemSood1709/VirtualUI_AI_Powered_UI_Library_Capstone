import React, { useState } from "react";

export default function Button({
  text = "Click me",
  onClick = () => {},
  bgColor = "#4F46E5",
  hoverColor = "#4338CA",
  textColor = "#FFFFFF",
  size = "medium",
  disabled = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeStyles = {
    small: { padding: "6px 14px", fontSize: "13px" },
    medium: { padding: "10px 20px", fontSize: "15px" },
    large: { padding: "14px 28px", fontSize: "17px" },
  };

  const style = {
    backgroundColor: disabled ? "#A1A1AA" : isHovered ? hoverColor : bgColor,
    color: textColor,
    border: "none",
    borderRadius: "8px",
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.2s ease, transform 0.1s ease",
    transform: isHovered && !disabled ? "scale(1.03)" : "scale(1)",
    ...sizeStyles[size],
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}