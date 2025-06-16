import PRODUCTS from "./assets/data";

import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
