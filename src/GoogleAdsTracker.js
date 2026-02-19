import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GoogleAdsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-11136687480", {
        page_path: location.pathname,
      });
      console.log("Google Ads page view sent:", location.pathname);
    }
  }, [location]);

  return null;
}

export default GoogleAdsTracker;
