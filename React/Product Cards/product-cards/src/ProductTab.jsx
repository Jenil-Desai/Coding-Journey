import Product from "./Product";
import "./ProductTab.css";

function ProductTab() {
  return (
    <div className="ProductTab">
      <Product  ProductName="Logitech MX Master" Desc1="8000 DPI" Desc2="5 Programmable Buttons" OldPrice={12495} NewPrice={8999}/>
      <Product  ProductName="Apple Pencile (2nd Gen)" Desc1="8000 DPI" Desc2="5 Programmable Buttons" OldPrice={12495} NewPrice={8999}/>
      <Product  ProductName="Zebronics Zeb-Transformer" Desc1="8000 DPI" Desc2="5 Programmable Buttons" OldPrice={12495} NewPrice={8999}/>
      <Product  ProductName="Petronics Toad 23" Desc1="8000 DPI" Desc2="5 Programmable Buttons" OldPrice={12495} NewPrice={8999}/>
    </div>
  );
}

export default ProductTab;
