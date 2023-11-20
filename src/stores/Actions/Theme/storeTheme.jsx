import { create } from "zustand";

const themeMode = create((set) => ({
  themeModeState: "light",
  ChangeMode: (mode) => set({ themeModeState: mode === "light" ? "dark" : "light" }) 
}));

export default themeMode;
