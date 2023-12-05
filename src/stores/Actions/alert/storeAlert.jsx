export const storeAlert = (set) => ({
  stateAlert: false,
  titleAlert: "Hi Boy",
  ChangeStateAlert: (value) => set({ stateAlert: value }),
  ChangeTitleAlert: (value) => set({ titleAlert: value }),
});
