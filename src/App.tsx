import React from "react";
import Banner from "./components/banner/Banner";
import CustomizationForm from "./components/form/CustomizationForm";
import Layout from "./components/layout/Layout";
import BannerContextProvider from "./context/BannerContext";

const App: React.FC = () => {
  return (
    <BannerContextProvider>
      <Layout>
        <Banner />
        <CustomizationForm />
      </Layout>
    </BannerContextProvider>
  );
};

export default App;
