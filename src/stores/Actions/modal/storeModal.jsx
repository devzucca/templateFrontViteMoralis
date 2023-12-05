export const storeModal = (set) => ({
  stateModal: false,
  titleModal: "Hi Boy",
  ChangeStateModal: (value) => set({ stateModal: value }),
  ChangeTitleModal: (value) => set({ titleModal: value }),
});
