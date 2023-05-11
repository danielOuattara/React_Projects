import { GridViewWrapper } from "./styleWrappers";
import Product from "./Product";

export default function GridView(props) {
  return (
    <GridViewWrapper>
      <div className="products-container">
        {props.filteredProducts.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </GridViewWrapper>
  );
}
