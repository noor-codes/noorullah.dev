const SearchBar = () => (
  <div className="mx-8 relative">
    <img
      src="/icons/search-icon.svg"
      alt="Search Icon"
      className="absolute h-5 top-6 right-3 cursor-pointer transform duration-300 ease-in-out hover:scale-110"
    />
    <input
      type="text"
      className="py-1 mt-4 w-full border-2 flex-1 border-gray-300 rounded mb-4 focus:border-gray-400 focus:ring-gray-400"
    />
  </div>
)

export default SearchBar
