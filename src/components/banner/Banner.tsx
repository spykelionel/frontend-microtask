import { Camera } from "lucide-react";
import type React from "react";
import { useState } from "react";
import useBannerContext from "../../hooks/useBannerContext";

const Banner: React.FC = () => {
  const { updateSettings, settings } = useBannerContext();
  const [isHovering, setIsHovering] = useState(false);

  /**
   * Method to change banner image.
   * @param e Event
   */
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

  return (
    <div
      className="relative flex items-start border border-gray-300 shadow-md rounded p-4 max-w-3xl mx-auto mt-4"
      data-testid="banner-container"
      style={{ backgroundColor: settings.backgroundColor }}
    >
      {/* Left side: Placeholder / image area */}
      <div
        className="flex-shrink-0 w-20 h-20 bg-gray-100 border border-gray-200 
                   flex items-center justify-center relative mr-4"
        aria-label="Placeholder image"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <input
          type="file"
          className="hidden"
          onChange={changeBannerImage}
          id="image"
          accept="image/*"
        />

        {settings.customImage ? (
          <img
            className="w-full h-full object-cover"
            src={settings.customImage || "/placeholder.svg"}
            alt="Banner placeholder"
          />
        ) : (
          <div className="text-gray-500 flex flex-col items-center">
            <Camera size={24} />
            <span className="text-sm">Placeholder</span>
          </div>
        )}

        {/* Overlay for image change */}
        <label htmlFor="image" className="cursor-pointer">
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 
              flex items-center justify-center transition-opacity duration-200 ${
                isHovering || !settings.customImage
                  ? "opacity-100"
                  : "opacity-0"
              }`}
          >
            <p
              className="text-white font-medium text-sm px-2 text-center"
              data-testid="overlay-text"
            >
              {settings.customImage ? "Change image" : "Add image"}
            </p>
          </div>
        </label>
      </div>

      {/* Middle: Text content */}
      <div className="flex-grow">
        {/* Title */}
        <h2
          className="text-lg font-bold mb-1"
          data-testid="banner-title"
          style={{ color: settings.textColor }}
        >
          {settings.customTitle}
        </h2>

        {/* Description */}
        <p
          className="text-sm mb-3"
          data-testid="banner-text"
          style={{ color: settings.textColor }}
        >
          {settings.customeDescription}
        </p>
      </div>
    </div>
  );
};

export default Banner;
