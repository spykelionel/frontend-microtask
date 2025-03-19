import { ImageIcon } from "lucide-react";
import React from "react";
import { FormSectionProps } from "../types";

const BannerStyleSelector: React.FC<FormSectionProps> = ({
  settings,
  updateSettings,
  accentColor,
}) => {
  return (
    <div className="mb-4" data-testid="banner-style-selector">
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        <ImageIcon size={18} className="mr-2" style={{ color: accentColor }} />
        Banner Style
      </label>
      <select
        value={settings.style}
        onChange={(e) => updateSettings({ style: e.target.value })}
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ borderColor: accentColor }}
        data-testid="style-select"
      >
        <option value="beach">Beach Sunset</option>
        <option value="mountains">Mountain View</option>
        <option value="cityscape">Urban Cityscape</option>
        <option value="forest">Forest Adventure</option>
      </select>
    </div>
  );
};

export default BannerStyleSelector;
