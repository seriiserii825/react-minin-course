export default function FavoritesBtn() {
  return (
    <button className="relative p-2.5 bg-white/20 hover:bg-white/30 rounded-xl transition-colors text-white cart-bounce">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-gray-900 text-[10px] font-bold rounded-full flex items-center justify-center">
        2
      </span>
    </button>
  );
}
