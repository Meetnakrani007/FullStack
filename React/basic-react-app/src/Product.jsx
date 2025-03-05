import "./Product.css";
function Product({ title, price }) {
  let styles = { backgroundColor: price > 30000 ? "pink" : null };
  return (
    <div className="Product">
      <h1>Product</h1>
    </div>
  );
}
export default Product;
