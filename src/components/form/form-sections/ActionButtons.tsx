import React from "react";
import { ActionButtonsProps } from "../types";

const ActionButtons: React.FC<ActionButtonsProps> = ({
  resetSettings,
  accentColor,
}) => {
  return (
    <div
      className="flex justify-end space-x-4 mt-6"
      data-testid="action-buttons"
    >
      <button
        onClick={resetSettings}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        data-testid="reset-button"
      >
        Reset
      </button>
      <button
        className="px-4 py-2 rounded-md text-white transition"
        style={{ backgroundColor: accentColor }}
        data-testid="apply-button"
      >
        Apply Changes
      </button>
    </div>
  );
};

export default ActionButtons;
