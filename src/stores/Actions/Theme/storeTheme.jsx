export const storeTheme = (set) => ({
  themeModeState: "light",
  ChangeMode: (mode) =>
    set({ themeModeState: mode === "light" ? "dark" : "light" }),
});
