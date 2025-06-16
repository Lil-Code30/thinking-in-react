export default function SearchBar() {
  return (
    <form className="flex flex-col gapy-2 mb-2">
      <input
        type="text"
        className="border p-1 rounded mb-1"
        placeholder="Search..."
      />
      <label htmlFor="stock">
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  );
}
