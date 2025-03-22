import React from "react";
import { useBannerContext } from "../../../context/BannerContext";

const ActionButtons: React.FC = () => {
  const { resetSettings } = useBannerContext();
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
        className="px-4 py-2 rounded-md text-white transition bg-blue-500 hover:bg-blue-600"
        data-testid="apply-button"
        onClick={() => alert("Applying changes... Saving to Database..")}
      >
        Apply Changes
      </button>
    </div>
  );
};

export default ActionButtons;
