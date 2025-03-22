import { Sliders } from "lucide-react";
import React from "react";
import useBannerSettings from "../../../hooks/useBannerContext";

const OverlayControls: React.FC = () => {
  const { settings, updateSettings } = useBannerSettings();
  return (
    <div className="mb-4" data-testid="overlay-controls">
      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Sliders size={18} className="mr-2 text-blue-500" />
        Overlay Opacity: {settings.overlayOpacity}
      </label>
      <input
        type="range"
        min="0"
        max="0.9"
        step="0.1"
        value={settings.overlayOpacity}
        onChange={(e) =>
          updateSettings({ overlayOpacity: parseFloat(e.target.value) })
        }
        className="w-full accent-blue-500"
        data-testid="opacity-slider"
      />
      {settings.backgroundStyle === "color" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Color
          </label>
          <input
            type="color"
            value={settings.backgroundColor}
            onChange={(e) =>
              updateSettings({ backgroundColor: e.target.value })
            }
            className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
            data-testid="color-picker"
          />
        </div>
      )}
    </div>
  );
};

export default OverlayControls;
