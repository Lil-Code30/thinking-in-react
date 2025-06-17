import PRODUCTS from "./assets/data";

import FilterableProductTable from "./components/FilterableProductTable";
import Banners from "./components/Banner";

function App() {
  const text01 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.";

  const text02 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
      <section className="my-3 p-1.5">
        <h1 className="text-3xl font-semibold">Custom Banners</h1>
        <Banners theme="success" title="Congratulation" text={text01} />
        <Banners theme="warning" title="Attention" text={text02} />
        <Banners
          theme="error"
          title="There is a problem with your application"
          text={text01}
        />
        <Banners theme="neutral" title="Update available" text={text02} />

        <h2>Banners without description</h2>
        <Banners theme="success" title="Congratulation" />
        <Banners theme="warning" title="Attention" />
        <Banners
          theme="error"
          title="There is a problem with your application"
        />
        <Banners theme="neutral" title="Update available" />
      </section>
    </>
  );
}

export default App;
