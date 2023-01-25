import { useState, useEffect } from "react";
import LocalStorageKullan from "./localStorageKullan";

export default function useGeceModu() {
  const [gm, setGm] = useState("off");
  const [setTheme, getTheme] = LocalStorageKullan();

  useEffect(() => {
    //const olanDeger = localStorage.getItem("geceModu");
    if (getTheme("geceModu")) {
      setGm(getTheme("geceModu"));
    }
  }, []);

  const toggleGm = () => {
    const yeniDeger = gm === "on" ? "off" : "on";
    setTheme("geceModu", yeniDeger);
    setGm(getTheme("geceModu"));
  };

  return [gm, toggleGm];
}
