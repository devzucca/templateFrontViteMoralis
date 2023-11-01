import { create } from "zustand";

const themeMode = create((set) => ({
  themeModeState: "light",
  ChangeMode: (mode) => {
    console.log(`color is mode ${mode}`);
    set({
      themeModeState: mode === "light" ? "dark" : "light",
    });
  },
}));

export default themeMode;
