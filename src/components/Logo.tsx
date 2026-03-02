export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 shrink-0 mr-auto">
      <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md">
        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
        </svg>
      </div>
      <span className="text-white font-extrabold text-xl tracking-tight">
        My E-commerce <span className="text-yellow-300">Store</span>
      </span>
    </div>
  );
}
