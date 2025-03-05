import Product from "./Product";

function ProductGroup() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple pencil (2nd Gen)" idx={1} />
      <Product title="Zebronic Zeb-ransformer" idx={2} />
      <Product title="Petronics Troad" idx={3} />
    </div>
  );
}
export default ProductGroup;
