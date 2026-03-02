interface IMiniCartBtnProps {
  onClick: () => void;
}

export default function MiniCartBtn({ onClick }: IMiniCartBtnProps) {
  return (
    <button
      onClick={onClick}
      className="relative cursor-pointer flex items-center gap-2 bg-white text-pink-600 font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg hover:shadow-pink-300/40 hover:scale-105 transition-all cart-bounce">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      Корзина
      <span className="bg-pink-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
        5
      </span>
    </button>
  );
}
