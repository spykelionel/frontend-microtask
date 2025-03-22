import { ImageIcon } from "lucide-react";
import React from "react";
import { useBannerContext } from "../../../context/BannerContext";

const BannerStyleSelector: React.FC = () => {
  const { settings, updateSettings } = useBannerContext();
  return (
    <div className="mb-4" data-testid="banner-style-selector">
      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
        <ImageIcon size={18} className="mr-2 text-blue-500" />
        Banner Background Style
      </label>
      <div className="flex gap-2">
        <button
          className={`w-1/2 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            settings.backgroundStyle === "image"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => updateSettings({ backgroundStyle: "image" })}
          data-testid="image-style-button"
        >
          Image
        </button>
        <button
          className={`w-1/2 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            settings.backgroundStyle === "color"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => updateSettings({ backgroundStyle: "color" })}
          data-testid="color-style-button"
        >
          Color
        </button>
      </div>
    </div>
  );
};

export default BannerStyleSelector;
