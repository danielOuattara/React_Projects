import { useEffect, useRef } from "react";
import { useGlobalContext } from "./../context/AppContext";

export default function SearchForm() {
  const { setState } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setState((prevState) => ({
      ...prevState,
      searchTerm: searchValue.current.value,
    }));
  };

  const handleSubmit = (event) => {
    console.log(searchValue.current.value);
    event.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}
