import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {
  return (
    <main className="w-1/2 mx-auto border p-1 mt-2 rounded">
      <SearchBar />
      <ProductTable products={products} />
    </main>
  );
}
