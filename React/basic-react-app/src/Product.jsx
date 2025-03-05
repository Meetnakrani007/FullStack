import "./Product.css";
import Price from "./Price";
function Product({ title, idx }) {
  let oldPrices = ["12,900", "11,200", "1,500", "599"];
  let newPrices = ["8,999", "7,999", "899", "250"];
  let description = [
    ["8,000 DPI", "5 programmable Buttons"],
    ["intutive surface", "designed for ipad pro"],
    ["designed for ipad pro", "intutive surface"],
    ["wireless", "optical orienttion"],
  ];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
    </div>
  );
}
export default Product;
