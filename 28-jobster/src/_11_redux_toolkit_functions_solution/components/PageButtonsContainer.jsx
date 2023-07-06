import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { PageButtonContainerWrapper } from "../../assets/styles";
import { useSelector, useDispatch } from "react-redux";

export default function PageButtonsContainer() {
  const dispatch = useDispatch();

  const { numOfPages, page } = useSelector((store) => store.allJobsState);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {};

  const nextPage = () => {};

  return (
    <PageButtonContainerWrapper>
      <button className="prev-btn" onClick={prevPage}>
        {" "}
        <HiChevronDoubleLeft />
      </button>

      <div className="btn-container">{pages}</div>

      <button className="next-btn" onClick={nextPage}>
        {" "}
        <HiChevronDoubleRight />
      </button>
    </PageButtonContainerWrapper>
  );
}
