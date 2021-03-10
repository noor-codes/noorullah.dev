const SearchBar = () => (
  <div className="mx-8 mt-4">
    <label htmlFor="search" className="relative mt-2 text-gray-800">
      Search Blog Posts
      <img
        src="/icons/search-icon.svg"
        alt="Search Icon"
        className="absolute h-5 top-9 right-3 cursor-pointer bg:gray-300"
      />
      <input
        id="search"
        type="text"
        className="py-1 mt-1 w-full border-2 flex-1 border-gray-300 rounded mb-4 focus:border-gray-400 text-gray-700 focus:ring-gray-400"
      />
    </label>
  </div>
)

export default SearchBar
