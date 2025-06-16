export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form className="flex flex-col gapy-2 mb-2">
      <input
        type="text"
        value={filterText}
        className="border p-1 rounded mb-1"
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label htmlFor="stock">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}
