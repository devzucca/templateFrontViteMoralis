import { createWithEqualityFn } from "zustand/traditional";

const User = createWithEqualityFn((set, get) => ({
  DataPerfilUser: [], // DATA_PERFIL_USER
  User: [], // DATA_USER
  Authenticated: false, // USER_AUTHENTICATED

  setDataPerfilUser: (value) => set({ DataPerfilUser: value}),
  setUser: (value) => set({ User: value}),
  setAuthenticated: (value) => set({ authenticated: value})
}));

export default User;
