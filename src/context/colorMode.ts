import { create } from 'zustand';

type ColorMode = 'light' | 'dark';

interface ColorModeStore {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

export const useColorModeStore = create<ColorModeStore>((set) => ({
  colorMode: 'dark',
  toggleColorMode: () => set((state) => ({ colorMode: state.colorMode === 'light' ? 'dark' : 'light' })),
}));
