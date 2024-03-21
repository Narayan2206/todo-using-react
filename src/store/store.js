import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const useThemeStore = create(
    persist((set, get) => ({
      currentTheme: "light",
      changeCurrentTheme: (theme)=> set({currentTheme: theme}),
    }),
    {
        name: "theme",
    },
    ),
);
   

export default useThemeStore;