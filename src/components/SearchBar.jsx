function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>

      <input
        type="text"
        className="search-bar"
        placeholder="Search videos, categories, creators..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;