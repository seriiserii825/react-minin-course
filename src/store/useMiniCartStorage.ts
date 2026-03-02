import { IProduct } from "@/interfaces/IProduct";
import { create, type StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface IActions {
  setProducts: (value: IProduct) => void;
  setIsOpen: (value: boolean) => void;
}

interface IInitialState {
  products: number[];
  isOpen?: boolean;
}

interface IProductsState extends IInitialState, IActions {}

const initialState: IInitialState = {
  products: [],
  isOpen: false,
};

const productsStore: StateCreator<IProductsState> = (set) => ({
  ...initialState,
  setProducts: (value: IProduct) => {
    set((state) => {
      const productIndex = state.products.findIndex((product) => product === value.id);

      if (productIndex === -1) {
        return { products: [...state.products, value.id] };
      } else {
        const updatedProducts = [...state.products];
        updatedProducts.splice(productIndex, 1);
        return { products: updatedProducts };
      }
    });
  },
  setIsOpen: (value: boolean) => {
    set(() => ({ isOpen: value }));
  },
});

const useProductsStorage = create<IProductsState>()(
  devtools(
    persist(productsStore, {
      name: "products-storage",
      storage: createJSONStorage(() => localStorage),
    }),
  ),
);

export const useMiniCartProducts = () => useProductsStorage((state) => state.products);
export const useSetMiniCartProducts = () => useProductsStorage((state) => state.setProducts);
export const useIsMiniCartOpen = () => useProductsStorage((state) => state.isOpen);
export const useSetIsMiniCartOpen = () => useProductsStorage((state) => state.setIsOpen);
