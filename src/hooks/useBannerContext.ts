// src/hooks/useBannerSettings.ts
import { useContext } from "react";
import { BannerContext } from "../context/BannerContext";

export const useBannerContext = () => {
  return useContext(BannerContext);
};

export default useBannerContext;
