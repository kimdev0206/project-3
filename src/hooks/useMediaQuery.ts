import { useEffect, useState } from "react";
import { getTheme } from "../styles/theme";

export default function useMediaQuery() {
  const mediaQuery = window.matchMedia(getTheme("light").mediaQuery.mobile);
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);

  useEffect(() => {
    setIsMobile(mediaQuery.matches);
  }, []);

  return { isMobile };
}
