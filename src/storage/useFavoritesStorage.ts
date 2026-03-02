import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IActions {
  setFavorites: (value: number) => void;
}

interface IInitialState {
  favorites: number[];
}

interface IFavoritesState extends IInitialState, IActions {}

const initialState: IInitialState = {
  favorites: [],
};

const productsStore: StateCreator<IFavoritesState> = (set) => ({
  ...initialState,
  setFavorites: (value: number) => {
    set((state) => {
      const isFavorite = state.favorites.includes(value);
      const updatedFavorites = isFavorite
        ? state.favorites.filter((id) => id !== value)
        : [...state.favorites, value];
      return { favorites: updatedFavorites };
    });
  },
});

const useFavoritesStorage = create<IFavoritesState>()(
  persist(productsStore, {
    name: "favorites-storage",
    storage: createJSONStorage(() => localStorage),
  }),
);

export const useFavorites = () => useFavoritesStorage((state) => state.favorites);
export const useSetFavorites = () => useFavoritesStorage((state) => state.setFavorites);
