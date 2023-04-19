import { useStoriesContext } from "./../context";

export default function Buttons() {
  const { isLoading, page, nbPages, handlePages } = useStoriesContext();

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
