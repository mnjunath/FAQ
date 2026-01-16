import "../css/searchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search FAQs..."
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search FAQs"
      />
    </div>
  );
};

export default SearchBar;
