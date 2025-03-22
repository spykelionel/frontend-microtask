import React from "react";
import useBannerContext from "../../hooks/useBannerContext";

const Banner: React.FC = () => {
  const { updateSettings, settings } = useBannerContext();
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
      className="relative h-96 w-full bg-cover bg-center flex items-center justify-center"
      style={
        settings.backgroundStyle == "color"
          ? backgroundColorStyle
          : backgroundImageStyle
      }
      data-testid="banner-container"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${settings.overlayOpacity})` }}
        data-testid="banner-overlay"
      ></div>
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1
          className="text-4xl font-bold mb-4 text-shadow"
          data-testid="banner-title"
          style={{ color: settings.textColor }}
        >
          {settings.customTitle}
        </h1>
        <p
          className="text-lg text-shadow"
          data-testid="banner-text"
          style={{ color: settings.textColor }}
        >
          {settings.customeDescription}
        </p>
      </div>
      <div className="flex relative  cursor-pointer ">
        <input
          type="file"
          className="hidden"
          onChange={changeBannerImage}
          id="image"
        />
        {settings.customImage && (
          <img
            className="rounded-full h-48 w-48 cursor-pointer"
            src={settings.customImage}
            alt="background image"
            onMouseEnter={() => {
              document.getElementById("overlay")?.classList.remove("hidden");
              document.getElementById("overlay")?.classList.add("flex");
            }}
            onMouseLeave={() => {
              document.getElementById("overlay")?.classList.add("hidden");
              document.getElementById("overlay")?.classList.remove("flex");
            }}
          />
        )}
        <div
          id="overlay"
          className={`absolute inset-0 bg-black bg-opacity-50 items-center justify-center ${settings.customImage ? "hidden" : "flex"} w-48 h-48 rounded-full `}
        >
          <label htmlFor="image">
            <p
              className="text-center text-white text-shadow font-bold text-lg cursor-pointer"
              data-testid="overlay-text"
            >
              Change image!
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
