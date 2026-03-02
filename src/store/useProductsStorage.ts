import { create, type StateCreator } from "zustand";

interface IActions {
  setSearch: (value: string) => void;
  setSortBy: (value: "title" | "price" | "all") => void;
  setOrder: (value: "asc" | "desc") => void;
}

interface IInitialState {
  search: string;
  sortBy: "title" | "price" | "all";
  order: "asc" | "desc";
}

interface IProductsState extends IInitialState, IActions {}

const initialState: IInitialState = {
  search: "",
  sortBy: "all",
  order: "asc",
};

const productsStore: StateCreator<IProductsState> = (set) => ({
  ...initialState,
  setSearch: (value: string) => set({ search: value }),
  setSortBy: (value: "title" | "price" | "all") => set({ sortBy: value }),
  setOrder: (value: "asc" | "desc") => set({ order: value }),
});

const useProductsStorage = create<IProductsState>()(productsStore);

export const useSearch = () => useProductsStorage((state) => state.search);
export const useSetSearch = () => useProductsStorage((state) => state.setSearch);
export const useSortBy = () => useProductsStorage((state) => state.sortBy);
export const useSetSortBy = () => useProductsStorage((state) => state.setSortBy);
export const useOrder = () => useProductsStorage((state) => state.order);
export const useSetOrder = () => useProductsStorage((state) => state.setOrder);
