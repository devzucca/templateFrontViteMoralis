
export const storeUtils = ((set: any) => ({
  SizeViewPortUser: "1",
  SizeViewPortNft: "1",
  StateActivityNft: false,

  setSizeViewPortUser: (value: any) => set({ SizeViewPortUser: value }),
  setSizeViewPortNft: (value: any) => set({ SizeViewPortNft: value }),
  setStateActivityNft: (value: any) => set({ StateActivityNft: value })
  
}));
