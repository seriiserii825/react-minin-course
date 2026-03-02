import { useSearch, useSetSearch } from "../storage/useProductsStorage";

export default function Search() {
  const search = useSearch();
  const setSearch = useSetSearch();

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value.trim());
  }
  return (
    <div className="flex-1 max-w-md">
      <div className="flex items-center bg-white/20 border border-white/30 rounded-full px-4 py-2.5 gap-2 focus-within:bg-white/30 transition-colors">
        <svg
          className="w-4 h-4 text-white/70 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={search}
          onChange={onSearchChange}
          placeholder="Search products..."
          className="bg-transparent text-white placeholder-white/60 text-sm outline-none w-full"
        />
      </div>
    </div>
  );
}
