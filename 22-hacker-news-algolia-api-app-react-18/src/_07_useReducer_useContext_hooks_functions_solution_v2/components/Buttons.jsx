import { useStoriesContext } from "./../context";
import { HANDLE_PAGE } from "../actions/storiesActions";

export default function Buttons() {
  const { isLoading, page, nbPages, dispatchStories } = useStoriesContext();

  const handlePages = (pageRequest) => {
    dispatchStories({ type: HANDLE_PAGE, payload: pageRequest });
  };
  return (
    <div className="btn-container">
      <button
        className="btn"
        disabled={isLoading}
        onClick={() => handlePages(-1)}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        className="btn"
        disabled={isLoading}
        onClick={() => handlePages(+1)}
      >
        next
      </button>
    </div>
  );
}
