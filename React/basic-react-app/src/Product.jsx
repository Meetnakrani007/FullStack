import "./Product.css";
function Product({ title, price, features }) {
  const list = features.map((feature) => <li>{feature}</li>);
  console.log(list);
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h5>{price}</h5>
      <p>{list}</p>
    </div>
  );
}
export default Product;
