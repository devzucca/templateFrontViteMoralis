
export const storeUser = ((set) => ({
  DataPerfilUser: [], // DATA_PERFIL_USER
  User: [], // DATA_USER
  Authenticated: false, // USER_AUTHENTICATED

  setDataPerfilUser: (value) => set({ DataPerfilUser: value}),
  setUser: (value) => set({ User: value}),
  setAuthenticated: (value) => set({ Authenticated: value})
}));
