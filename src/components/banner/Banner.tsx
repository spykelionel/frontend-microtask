import React from "react";
import { BannerProps } from "./types";

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  overlayOpacity,
  title,
  text,
}) => {
  return (
    <div
      className="relative h-96 w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-testid="banner-container"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        data-testid="banner-overlay"
      ></div>
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1
          className="text-4xl font-bold mb-4 text-shadow"
          data-testid="banner-title"
        >
          {title}
        </h1>
        <p className="text-lg text-shadow" data-testid="banner-text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Banner;
