import { useFilterContext } from "../context/";
import GridView from "./GridView";
import ListView from "./ListView";

export default function ProductList() {
  const { filteredProducts } = useFilterContext();

  return <GridView filteredProducts={filteredProducts}></GridView>;
}
