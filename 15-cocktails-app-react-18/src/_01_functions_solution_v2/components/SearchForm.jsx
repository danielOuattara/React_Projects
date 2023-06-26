import { useEffect, useRef } from "react";

export default function SearchForm(props) {
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (event) => event.preventDefault();

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={() => props.searchCocktail(searchValue.current.value)}
          />
        </div>
      </form>
    </section>
  );
}
