import { useIsMiniCartOpen, useSetIsMiniCartOpen } from "@/store/useMiniCartStorage";

export default function MiniCart() {
  const isOpen = useIsMiniCartOpen();
  const setIsOpen = useSetIsMiniCartOpen();

  const asideClasses = `fixed top-0 left-0 z-50 h-full w-[360px] bg-white shadow-2xl
    transform transition-transform duration-300 ease-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`;

  const overlayClasses = `fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`;

  function closeMiniCart() {
    setIsOpen(false);
  }

  return (
    <>
      <div onClick={closeMiniCart} className={overlayClasses}></div>

      <aside className={asideClasses}>
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">Cart (3)</h2>
          <button
            onClick={closeMiniCart}
            className="text-gray-400 hover:text-black text-2xl leading-none cursor-pointer">
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          <div className="flex gap-4">
            <img
              src="https://via.placeholder.com/80"
              alt=""
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium">Essence Mascara Lash Princess</h3>
              <p className="text-sm text-gray-500">$9.99</p>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center border rounded-lg">
                  <button className="px-2 py-1 text-gray-500">−</button>
                  <span className="px-2 text-sm">1</span>
                  <button className="px-2 py-1 text-gray-500">+</button>
                </div>
                <button className="text-sm text-red-500 hover:underline">Remove</button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="https://via.placeholder.com/80"
              alt=""
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium">Gucci Bloom Eau de</h3>
              <p className="text-sm text-gray-500">$79.99</p>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center border rounded-lg">
                  <button className="px-2 py-1 text-gray-500">−</button>
                  <span className="px-2 text-sm">1</span>
                  <button className="px-2 py-1 text-gray-500">+</button>
                </div>
                <button className="text-sm text-red-500 hover:underline">Remove</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t px-5 py-4 space-y-4">
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span>$89.98</span>
          </div>
        </div>
      </aside>
    </>
  );
}
