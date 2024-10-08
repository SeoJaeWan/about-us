import { create } from "zustand";

export const Black = "black";
export const White = "white";

type ThemeState = {
  theme: boolean;

  toggleTheme: () => void;
  getTheme: () => string;
};

const useThemeStore = create<ThemeState>((set, get) => ({
  theme: true,

  toggleTheme: () => set((state) => ({ theme: !state.theme })),
  getTheme: () => {
    const { theme } = get();

    return theme ? White : Black;
  },
}));

export default useThemeStore;
