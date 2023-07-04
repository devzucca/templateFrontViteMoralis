import create from 'zustand';

type UserState = {
  username: string;
  setUsername: (name: string) => void;
};

export const useUserStore = create<UserState>((set) => ({
  username: '',
  setUsername: (name) => set({ username: name }),
}));
