import React from "react";
import Banner from "./components/banner/Banner";
import CustomizationForm from "./components/form/CustomizationForm";
import Layout from "./components/layout/Layout";
import useBannerSettings from "./hooks/useBannerSettings";

const App: React.FC = () => {
  const {
    settings,
    updateSettings,
    resetSettings,
    getCurrentBannerImage,
    getCurrentBannerTitle,
    getCurrentBannerText,
  } = useBannerSettings();

  return (
    <Layout>
      <Banner
        backgroundImage={getCurrentBannerImage()}
        overlayOpacity={settings.overlayOpacity}
        title={getCurrentBannerTitle()}
        text={getCurrentBannerText()}
      />
      <CustomizationForm
        settings={settings}
        updateSettings={updateSettings}
        resetSettings={resetSettings}
        accentColor={settings.accentColor}
      />
    </Layout>
  );
};

export default App;
