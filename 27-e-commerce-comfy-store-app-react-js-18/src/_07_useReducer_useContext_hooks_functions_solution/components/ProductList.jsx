import { useFilterContext } from "../context/";
import GridView from "./GridView";
import ListView from "./ListView";

export default function ProductList() {
  const { filteredProducts, isGridViewLayout } = useFilterContext();
  console.log("filteredProducts PRODUCT_LIST = ", filteredProducts);

  if (filteredProducts.length === 0) {
    return (
      <h5 /* style={{ textTransform: "none" }} */>
        {" "}
        Sorry, no product match your search
      </h5>
    );
  }

  if (!isGridViewLayout) {
    return <ListView filteredProducts={filteredProducts} />;
  }

  return <GridView filteredProducts={filteredProducts}></GridView>;
}
