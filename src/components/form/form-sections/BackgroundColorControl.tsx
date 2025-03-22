import useBannerContext from "../../../hooks/useBannerContext";

function BackgroundColorControl() {
  const { settings, updateSettings } = useBannerContext();
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Background Color
      </label>
      <input
        type="color"
        value={settings.backgroundColor}
        onChange={(e) => updateSettings({ backgroundColor: e.target.value })}
        className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
        data-testid="color-picker"
      />
    </div>
  );
}

export default BackgroundColorControl;
