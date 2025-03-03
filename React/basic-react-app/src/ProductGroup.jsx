import Product from "./Product";

function ProductGroup() {
  let options = ["option", "sell", "buy"];
  return (
    <>
      <Product title="Pen" price="10" features={options} />
      <Product title="Book" price="100" features={options} />
      <Product title="Phone" price="10k" features={options} />
    </>
  );
}
export default ProductGroup;
