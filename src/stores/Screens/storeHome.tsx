
export const storeHome = ( (set: any) => ({
  DataContentLive: [], // SET_DATA_CONTENT_LIVE
  DataContentExplore: [], // SET_DATA_CONTENT_EXPLORE
  DataContentUsers: [], // SET_DATA_CONTENT_USERS

  setDataContentLive: (value: any) => set({ DataContentLive: value}),
  setDataContentExplore: (value: any) => set({ DataContentExplore: value}),
  setDataContentUsers: (value: any) => set({ DataContentUsers: value})
}) );

