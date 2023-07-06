import { FormInputRow, FormSelectRow } from "./index";
import { SearchContainerWrapper } from "../../assets/styles";
import { useSelector, useDispatch } from "react-redux";
import { allJobsAction } from "../redux/allJobs/allJobsSlice";
import { useState, useMemo } from "react";

export default function SearchJobContainer() {
  const [localSearch, setLocalSearch] = useState("");

  const dispatch = useDispatch();

  const {
    isLoadingAllJobs,
    // search,
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

  const debounce = () => {
    let timeoutID;
    return (event) => {
      clearTimeout(timeoutID);
      setLocalSearch(event.target.value);
      timeoutID = setTimeout(() => {
        dispatch(
          allJobsAction.handleChangeFilters({
            name: event.target.name,
            value: event.target.value,
          }),
        );
      }, 1000);
    };
  };

  const handleClearInput = () => {
    setLocalSearch("");
    dispatch(allJobsAction.clearSearchFilters());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <SearchContainerWrapper>
      <form className="form">
        <h4> search form</h4>
        <div className="form-center">
          <FormInputRow
            // search position
            type="text"
            name="search"
            // handleChange={handleSearch}
            value={localSearch}
            handleChange={optimizedDebounce}
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
            onClick={handleClearInput}
          >
            {" "}
            clear filters
          </button>
        </div>
      </form>
    </SearchContainerWrapper>
  );
}
