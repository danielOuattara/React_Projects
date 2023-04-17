export default function PageButtonList({
  data,
  setPageSelected,
  pageSelected,
  handlePreviousPage,
  handleNextPage,
}) {
  return (
    <div className="btn-container">
      <button className="prev-btn" onClick={handlePreviousPage}>
        previous
      </button>

      {data.map((item, index) => (
        <button
          key={index}
          className={`page-btn ${pageSelected === index ? "active-btn" : null}`}
          onClick={() => setPageSelected(index)}
        >
          {index + 1}
        </button>
      ))}

      <button className="next-btn" onClick={handleNextPage}>
        next
      </button>
    </div>
  );
}
