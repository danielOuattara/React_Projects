import { useFilterContext } from "../context/";
import { getUniqueValues, priceFormatter } from "./../../utilities";
import { FaCheck } from "react-icons/fa";
import { FiltersWrapper } from "./styleWrappers";

export default function Filters() {
  const { handleFiltersChange, clearAllFilters, filters, allProducts } =
    useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <FiltersWrapper>
      <div className="content">
        <form onSubmit={(event) => event.preventDefault()}>
          {/* ---------------------------------------------- */}
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

          {/* ---------------------------------------------- */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  name="category"
                  onClick={handleFiltersChange}
                  className={`${
                    filters.category === category ? "active" : null
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* ---------------------------------------------- */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              id="company"
              className="company"
              onChange={handleFiltersChange}
            >
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          {/* ---------------------------------------------- */}

          <div className="form-control">
            <h5>color</h5>
            <div className="colors">
              {colors.map((color) => {
                if (color === "all") {
                  return (
                    <button
                      key={color}
                      name="color"
                      data-color="all"
                      className={`${
                        filters.color === "all" ? "active all-btn" : "all-btn"
                      }`}
                      onClick={handleFiltersChange}
                    >
                      All
                    </button>
                  );
                } else {
                  return (
                    <button
                      key={color}
                      className={`${
                        filters.color === color
                          ? "active color-btn"
                          : "color-btn"
                      }`}
                      name="color"
                      style={{ background: color }}
                      data-color={color}
                      onClick={handleFiltersChange}
                    >
                      {filters.color === color ? <FaCheck /> : ""}
                    </button>
                  );
                }
              })}
            </div>
          </div>
          {/* ---------------------------------------------- */}

          <div className="form-control">
            <h5>price</h5>
            <p className="price">
              {priceFormatter(filters.rangeSelectedPrice)}
            </p>
            <input
              type="range"
              name="price"
              min={filters.rangeMinPrice}
              max={filters.rangeMaxPrice}
              value={filters.rangeSelectedPrice}
              onChange={handleFiltersChange}
            />
          </div>
          {/* ---------------------------------------------- */}

          <div className="form-control shipping">
            <label htmlFor="isFreeShipping">free isFreeShipping</label>
            <input
              id="isFreeShipping"
              type="checkbox"
              name="isFreeShipping"
              onChange={handleFiltersChange}
              checked={filters.isFreeShipping}
            />
          </div>
          {/* ---------------------------------------------- */}
        </form>
        <button className="clear-btn" onClick={clearAllFilters}>
          clear filters
        </button>
      </div>
    </FiltersWrapper>
  );
}
