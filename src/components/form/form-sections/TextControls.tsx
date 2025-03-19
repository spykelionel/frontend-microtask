import { FileText, Type } from "lucide-react";
import React from "react";
import { FormSectionProps } from "../types";

const TextControls: React.FC<FormSectionProps> = ({
  settings,
  updateSettings,
  accentColor,
}) => {
  return (
    <div data-testid="text-controls">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <Type size={18} className="mr-2" style={{ color: accentColor }} />
          Custom Title
        </label>
        <input
          type="text"
          value={settings.customTitle}
          onChange={(e) => updateSettings({ customTitle: e.target.value })}
          placeholder="Enter custom title"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ borderColor: accentColor }}
          data-testid="title-input"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FileText size={18} className="mr-2" style={{ color: accentColor }} />
          Custom Text
        </label>
        <textarea
          value={settings.customText}
          onChange={(e) => updateSettings({ customText: e.target.value })}
          placeholder="Enter custom description"
          rows={4}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ borderColor: accentColor }}
          data-testid="text-input"
        />
      </div>
    </div>
  );
};

export default TextControls;
