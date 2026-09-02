import React, { useState } from "react";

export default function Card({
  title = "Card title",
  description = "This is a short description of the card content.",
  imageUrl = "https://via.placeholder.com/300x160",
  bgColor = "#FFFFFF",
  textColor = "#111827",
  accentColor = "#4F46E5",
  width = "300px",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width,
    backgroundColor: bgColor,
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: isHovered
      ? "0 8px 20px rgba(0,0,0,0.15)"
      : "0 2px 8px rgba(0,0,0,0.08)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    fontFamily: "sans-serif",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    display: "block",
  };

  const bodyStyle = {
    padding: "16px",
  };

  const titleStyle = {
    margin: "0 0 8px 0",
    fontSize: "18px",
    fontWeight: 600,
    color: textColor,
  };

  const descStyle = {
    margin: "0 0 12px 0",
    fontSize: "14px",
    lineHeight: 1.5,
    color: "#6B7280",
  };

  const buttonStyle = {
    border: "none",
    background: "none",
    padding: 0,
    fontSize: "14px",
    fontWeight: 600,
    color: accentColor,
    cursor: "pointer",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} style={imgStyle} />
      <div style={bodyStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descStyle}>{description}</p>
        <button style={buttonStyle}>Learn more →</button>
      </div>
    </div>
  );
}