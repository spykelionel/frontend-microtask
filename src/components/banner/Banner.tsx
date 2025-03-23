import { Camera } from "lucide-react";
import React, { useState } from "react";
import useBannerContext from "../../hooks/useBannerContext";

const Banner: React.FC = () => {
  const { updateSettings, settings } = useBannerContext();
  const [isHovering, setIsHovering] = useState(false);

  const changeBannerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateSettings({ customImage: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const backgroundColorStyle = {
    backgroundColor: settings.backgroundColor,
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${settings.backgroundImage})`,
  };

  return (
    <div
      className="relative w-full bg-cover bg-center flex flex-col md:flex-row items-center justify-center p-4 md:p-8 lg:p-12"
      style={
        settings.backgroundStyle === "color"
          ? backgroundColorStyle
          : backgroundImageStyle
      }
      data-testid="banner-container"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${settings.overlayOpacity})` }}
        data-testid="banner-overlay"
      ></div>

      {/* Content container - adjusts layout based on screen size */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
        {/* Text content - takes full width on mobile, partial on larger screens */}
        <div className="text-center md:text-left text-white w-full md:w-2/3 lg:w-1/2 mb-6 md:mb-0">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-shadow leading-tight"
            data-testid="banner-title"
            style={{ color: settings.textColor }}
          >
            {settings.customTitle}
          </h1>
          <p
            className="text-base sm:text-lg text-shadow"
            data-testid="banner-text"
            style={{ color: settings.textColor }}
          >
            {settings.customeDescription}
          </p>
        </div>

        {/* Image container */}
        <div className="relative" aria-label="Profile image">
          <input
            type="file"
            className="hidden"
            onChange={changeBannerImage}
            id="image"
            accept="image/*"
          />

          {/* Image or placeholder */}
          <div
            className="relative rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
          >
            {settings.customImage ? (
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={settings.customImage}
                alt="Profile"
              />
            ) : (
              <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                <Camera size={32} className="text-gray-500" />
              </div>
            )}

            {/* Overlay for image change - works with hover on desktop and touch on mobile */}
            <label htmlFor="image" className="cursor-pointer">
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 items-center justify-center transition-opacity duration-200 ${
                  isHovering || !settings.customImage
                    ? "flex opacity-100"
                    : "flex opacity-0"
                } rounded-full`}
              >
                <p
                  className="text-center text-white text-shadow font-bold text-sm sm:text-base md:text-lg px-2"
                  data-testid="overlay-text"
                >
                  {settings.customImage ? "Change image" : "Add image"}
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
