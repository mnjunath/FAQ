import "../css/categoryFilter.css";

const CategoryFilter = ({ categories, onSelect }) => {
  return (
    <div className="category-filter">
      <select
        className="category-select"
        onChange={(e) => onSelect(e.target.value)}
        aria-label="Filter FAQs by category"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
