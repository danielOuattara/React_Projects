import { FormInputRow, FormSelectRow } from "./index";
import { SearchContainerWrapper } from "../../assets/styles";
import { useSelector, useDispatch } from "react-redux";
import { allJobsAction } from "../redux/allJobs/allJobsSlice";

export default function SearchJobContainer() {
  const dispatch = useDispatch();

  const {
    isLoadingAllJobs,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
  } = useSelector((state) => state.allJobsState);

  const { jobTypeOptions, statusOptions } = useSelector(
    (state) => state.singleJobState,
  );

  const handleSearch = (event) => {
    // if (isLoadingAllJobs) return; // bad UX !
    dispatch(
      allJobsAction.handleChangeFilters({
        name: event.target.name,
        value: event.target.value,
      }),
    );
  };

  return (
    <SearchContainerWrapper>
      <form className="form">
        <h4> search form</h4>
        <div className="form-center">
          <FormInputRow
            // search position
            type="text"
            name="search"
            handleChange={handleSearch}
            value={search}
          />

          <FormSelectRow
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            options={["all", ...statusOptions]}
          />

          <FormSelectRow
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            options={["all", ...jobTypeOptions]}
          />

          <FormSelectRow
            name="sort"
            value={sort}
            handleChange={handleSearch}
            options={sortOptions}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoadingAllJobs}
            type="button"
            onClick={() => dispatch(allJobsAction.clearSearchFilters())}
          >
            {" "}
            clear filters
          </button>
        </div>
      </form>
    </SearchContainerWrapper>
  );
}
