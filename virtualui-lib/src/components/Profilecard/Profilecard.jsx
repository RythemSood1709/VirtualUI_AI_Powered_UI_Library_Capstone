import React, { useState } from "react";

export const Profilecard = ({
  name = "Jane Doe",
  role = "Product Designer",
  bio = "Crafting delightful user experiences one pixel at a time.",
  avatarUrl = "https://i.pravatar.cc/150?img=47",
  bgColor = "#FFFFFF",
  accentColor = "#4F46E5",
  textColor = "#111827",
  width = "280px",
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width,
    backgroundColor: bgColor,
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
    fontFamily: "sans-serif",
    boxShadow: isHovered
      ? "0 10px 24px rgba(0,0,0,0.15)"
      : "0 2px 10px rgba(0,0,0,0.08)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
  };

  const avatarStyle = {
    width: "88px",
    height: "88px",
    borderRadius: "50%",
    objectFit: "cover",
    border: `3px solid ${accentColor}`,
    display: "block",
    margin: "0 auto 12px auto",
  };

  const nameStyle = {
    margin: "0 0 4px 0",
    fontSize: "18px",
    fontWeight: 700,
    color: textColor,
  };

  const roleStyle = {
    margin: "0 0 10px 0",
    fontSize: "13px",
    fontWeight: 500,
    color: accentColor,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const bioStyle = {
    margin: "0 0 18px 0",
    fontSize: "14px",
    lineHeight: 1.5,
    color: "#6B7280",
  };

  const buttonStyle = {
    padding: "8px 24px",
    borderRadius: "20px",
    border: isFollowing ? `1.5px solid ${accentColor}` : "none",
    backgroundColor: isFollowing ? "transparent" : accentColor,
    color: isFollowing ? accentColor : "#FFFFFF",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={avatarUrl} alt={name} style={avatarStyle} />
      <h3 style={nameStyle}>{name}</h3>
      <p style={roleStyle}>{role}</p>
      <p style={bioStyle}>{bio}</p>
      <button style={buttonStyle} onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};
