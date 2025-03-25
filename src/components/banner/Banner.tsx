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
      className="relative w-full overflow-hidden"
      data-testid="banner-container"
    >
      {/* Background Image or Color */}
      <div className="absolute inset-0 z-0">
        {settings.backgroundStyle === "color" ? (
          <div
            className="w-full h-full"
            style={{ backgroundColor: settings.backgroundColor }}
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${settings.backgroundImage})`,
            }}
          />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${settings.overlayOpacity})`,
          }}
          data-testid="banner-overlay"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* User Avatar with upload functionality */}
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
              className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onTouchStart={() => setIsHovering(true)}
              onTouchEnd={() => setIsHovering(false)}
            >
              {settings.customImage ? (
                <img
                  className="h-full w-full object-cover"
                  src={settings.customImage || "/placeholder.svg"}
                  alt="Profile"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <Camera size={32} className="text-gray-500" />
                </div>
              )}

              {/* Overlay for image change */}
              <label htmlFor="image" className="cursor-pointer">
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-200 ${
                    isHovering || !settings.customImage
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <p
                    className="text-center text-white font-medium text-sm px-2"
                    data-testid="overlay-text"
                  >
                    {settings.customImage ? "Change image" : "Add image"}
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-2xl text-center md:text-left">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
              data-testid="banner-title"
              style={{ color: settings.textColor || "white" }}
            >
              {settings.customTitle || "Your Title Here"}
            </h1>

            <p
              className="text-base md:text-lg"
              data-testid="banner-text"
              style={{ color: settings.textColor || "white" }}
            >
              {settings.customeDescription || "Your description here.."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
