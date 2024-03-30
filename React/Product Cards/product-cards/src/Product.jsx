import "./Product.css";

function Product({ ProductName, Desc1, Desc2, OldPrice, NewPrice }) {
  return (
    <div className="Product">
      <p className="Heading">{ProductName}</p>
      <ul className="features">
        <li>{Desc1}</li>
        <li>{Desc2}</li>
      </ul>
      <div className="Prices">
        <p>
          <sup>&#8377;</sup>
          <del>{OldPrice}</del>
        </p>
        <p>
          <sup>&#8377;</sup>
          {NewPrice}
        </p>
      </div>
    </div>
  );
}

export default Product;
