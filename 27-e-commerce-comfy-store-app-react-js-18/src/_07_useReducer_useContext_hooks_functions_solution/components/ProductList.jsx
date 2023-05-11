import { useFilterContext } from "../context/";
import GridView from "./GridView";
import ListView from "./ListView";

export default function ProductList() {
  const { filteredProducts, gridViewLayout } = useFilterContext();

  if (filteredProducts.length === 0) {
    return <h5> Sorry, no product match your search</h5>;
  }

  if (!gridViewLayout) {
    return <ListView filteredProducts={filteredProducts} />;
  }

  return <GridView filteredProducts={filteredProducts}></GridView>;
}
