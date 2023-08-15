"use client";
import Link from "next/link";
function SearchBar() {
  return (
    <header className="flex h-16 bg-yellow-300 px-4">
      <form
        action="/items"
        className="m-auto flex max-w-screen-xl flex-1 gap-4"
      >
        <Link href="/" className="text-xl font-bold text-slate-900">
          ML APP
        </Link>
        <input
          className="h-8 flex-1 px-2 text-white bg-gray-700"
          name="search"
          type="text"
        />
        <button
          className="h-8 bg-gray-300 px-2 py-1 text-slate-700 "
          type="submit"
        >
          Buscar
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
