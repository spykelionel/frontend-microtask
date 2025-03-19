import { Sliders } from "lucide-react";
import React from "react";
import { FormSectionProps } from "../types";

const OverlayControls: React.FC<FormSectionProps> = ({
  settings,
  updateSettings,
  accentColor,
}) => {
  return (
    <div className="mb-4" data-testid="overlay-controls">
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Sliders size={18} className="mr-2" style={{ color: accentColor }} />
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
        style={{ accentColor }}
        data-testid="opacity-slider"
      />
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Accent Color
        </label>
        <input
          type="color"
          value={settings.accentColor}
          onChange={(e) => updateSettings({ accentColor: e.target.value })}
          className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
          data-testid="color-picker"
        />
      </div>
    </div>
  );
};

export default OverlayControls;
