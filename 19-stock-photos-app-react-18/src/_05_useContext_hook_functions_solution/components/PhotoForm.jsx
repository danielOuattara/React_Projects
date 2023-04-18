import { usePhotoContext } from "./../context/PhotoContext";
import { FaSearch } from "react-icons/fa";

function PhotoForm() {
  const { query, setPhotoState, submitQueryRequest } = usePhotoContext();

  const handleChange = (event) => {
    setPhotoState((prevState) => ({ ...prevState, query: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQueryRequest();
  };

  return (
    <section className="search">
      <form className="search-form">
        <input
          type="text"
          placeholder="search"
          className="form-input"
          value={query}
          onChange={(event) => handleChange(event)}
          // onChange={handleChange}
        />
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>
    </section>
  );
}

export default PhotoForm;
