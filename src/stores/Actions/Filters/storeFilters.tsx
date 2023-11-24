
export const storeFilters = ((set: any) => ({
  FilterCoincidenceHome: "1",
  FilterRenderPerfilNft: "1",
  InputSearchHomeResponsive: false,

  setFilterCoincidenceHome: (value: any) => set({ FilterCoincidenceHome: value }),
  setFilterRenderPerfilNft: (value: any) => set({ FilterRenderPerfilNft: value }),
  setInputSearchHomeResponsive: (value: any) => set({ InputSearchHomeResponsive: value })
  
}));
