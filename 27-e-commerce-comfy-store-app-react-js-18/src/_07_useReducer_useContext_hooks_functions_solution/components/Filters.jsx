import { useFilterContext } from "../context/";
import { getUniqueValues, priceFormatter } from "./../../utilities";
import { FaCheck } from "react-icons/fa";
import { FiltersWrapper } from "./styleWrappers";

export default function Filters() {
  const { handleFiltersChange, clearAllFilters, filters, allProducts } =
    useFilterContext();
  return (
    <FiltersWrapper>
      <div className="content">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              className="search-input"
              name="text"
              placeholder="search"
              value={filters.text}
              onChange={handleFiltersChange}
            />
          </div>

          <div className="form-control">
            <h5>category</h5>
            <div></div>
          </div>

          <div className="form-control">
            <h5>company</h5>
          </div>

          <div className="form-control">
            <h5>color</h5>
          </div>

          <div className="form-control">
            <h5>price</h5>
            <input
              type="range"
              name="price"
              min={filters.rangeMinPrice}
              max={filters.rangeMaxPrice}
              // value={filters.rangeSelectedPrice}
            />
          </div>

          <div className="form-control shipping">
            <h5>shipping</h5>
            <input id="shipping" type="checkbox" name="shipping" />
          </div>
        </form>
        <button className="clear-btn" onClick={clearAllFilters}>
          clear filters
        </button>
      </div>
    </FiltersWrapper>
  );
}
