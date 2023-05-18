import { useFilterContext } from "../context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { SortWrapper } from "./styleWrappers";

export default function Sort() {
  const {
    filteredProducts,
    isGridViewLayout,
    changeViewLayoutToGrid,
    changeViewLayoutToList,
    handleSortChange,
  } = useFilterContext();

  return (
    <SortWrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${isGridViewLayout && "active"}`}
          onClick={changeViewLayoutToGrid}
        >
          <BsFillGridFill />
        </button>

        <button
          type="button"
          className={`${!isGridViewLayout && "active"}`}
          onClick={changeViewLayoutToList}
        >
          <BsList />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <hr />{" "}
      <form>
        <label htmlFor="sortBy">sort by : &nbsp; </label>
        <select
          name="sortBy"
          id="sortBy"
          className="sort-input"
          onChange={handleSortChange}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </SortWrapper>
  );
}
