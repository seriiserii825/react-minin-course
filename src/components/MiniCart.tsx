import { IProduct } from "@/interfaces/IProduct";
import {
  useIsMiniCartOpen,
  useMiniCartProducts,
  useSetIsMiniCartOpen,
  useSetMiniCartProducts,
} from "@/store/useMiniCartStorage";
import formatPrice from "@/utils/formatPrice";
import toast from "react-hot-toast";

export default function MiniCart() {
  const isOpen = useIsMiniCartOpen();
  const setIsOpen = useSetIsMiniCartOpen();

  const miniCartProducts = useMiniCartProducts();
  const setProductsToMiniCart = useSetMiniCartProducts();

  const asideClasses = `fixed top-0 left-0 z-50 h-full w-[360px] bg-white shadow-2xl
    transform transition-transform duration-300 ease-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`;

  const overlayClasses = `fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`;

  const totalPrice = miniCartProducts.reduce((total, product) => total + product.price, 0);

  function closeMiniCart() {
    setIsOpen(false);
  }

  function removeFromMiniCart(product: IProduct) {
    setProductsToMiniCart(product);
    toast.success(`${product.title} removed from cart`);
  }

  return (
    <>
      <div onClick={closeMiniCart} className={overlayClasses}></div>

      <aside className={asideClasses}>
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">Cart ({miniCartProducts.length})</h2>
          <button
            onClick={closeMiniCart}
            className="text-gray-400 hover:text-black text-2xl leading-none cursor-pointer">
            &times;
          </button>
        </div>

        {!miniCartProducts?.length ? (
          <div className="flex flex-col items-center gap-3 mt-10">
            <h3 className="text-lg font-medium">Your cart is empty</h3>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {miniCartProducts.map((product) => (
              <div className="flex gap-4" key={product.id}>
                <img src={product.thumbnail} alt="" className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => removeFromMiniCart(product)}
                      className="text-sm text-red-500 hover:underline cursor-pointer">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border-t px-5 py-4 space-y-4">
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
