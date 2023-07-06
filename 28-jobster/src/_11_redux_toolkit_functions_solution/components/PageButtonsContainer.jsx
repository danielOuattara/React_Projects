import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { PageButtonContainerWrapper } from "../../assets/styles";
import { useSelector, useDispatch } from "react-redux";
import { allJobsAction } from "../redux/allJobs/allJobsSlice";

//--------------------------------------------------------

export default function PageButtonsContainer() {
  const dispatch = useDispatch();

  const { numOfPages, page } = useSelector((store) => store.allJobsState);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPageValue = page - 1;
    if (newPageValue < 1) {
      newPageValue = numOfPages;
    }
    dispatch(allJobsAction.updatePageNumber(newPageValue));
  };

  const nextPage = () => {
    let newPageValue = page + 1;
    if (newPageValue > numOfPages) {
      newPageValue = 1;
    }
    dispatch(allJobsAction.updatePageNumber(newPageValue));
  };

  return (
    <PageButtonContainerWrapper>
      <button className="prev-btn" onClick={prevPage}>
        {" "}
        <HiChevronDoubleLeft /> previous
      </button>

      <div className="btn-container">
        {pages.map((pageItem) => (
          <button
            key={pageItem}
            type="button"
            className={pageItem === page ? "pageBtn active" : "pageBtn"}
            onClick={() => dispatch(allJobsAction.updatePageNumber(pageItem))}
          >
            {pageItem}
          </button>
        ))}
      </div>

      <button className="next-btn" onClick={nextPage}>
        {" "}
        <HiChevronDoubleRight />
        next
      </button>
    </PageButtonContainerWrapper>
  );
}
