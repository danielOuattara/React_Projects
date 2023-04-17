export default function SearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // const searchValue = event.target.elements[0].value; // OK
    const searchValue = event.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          className="form-input search-input"
          placeholder="example: cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
}
