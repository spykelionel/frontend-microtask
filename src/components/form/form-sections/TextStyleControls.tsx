import React from "react";
import useBannerSettings from "../../../hooks/useBannerContext";

const TextStyleControls: React.FC = () => {
  const { settings, updateSettings } = useBannerSettings();
  return (
    <div className="mb-4" data-testid="overlay-controls">
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Color
        </label>
        <input
          type="color"
          value={settings.textColor}
          onChange={(e) => updateSettings({ textColor: e.target.value })}
          className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
          data-testid="text-color-picker"
        />
      </div>
    </div>
  );
};

export default TextStyleControls;
