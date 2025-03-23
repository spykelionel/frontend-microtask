import { useContext } from "react";
import { BannerContext } from "../context/BannerContext";
const useBannerContext = () => {
  return useContext(BannerContext);
};

export default useBannerContext;
