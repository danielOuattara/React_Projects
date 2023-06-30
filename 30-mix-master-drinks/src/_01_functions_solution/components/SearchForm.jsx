import { Form, useNavigation } from "react-router-dom";
import { SearchFormWrapper } from "./../../assets/styles";

export default function SearchForm({ searchTerm }) {
  const navigation = useNavigation();
  return (
    <SearchFormWrapper>
      <Form className="form">
        <input
          className="form-input"
          defaultValue={searchTerm}
          name="search"
          type="search"
        />
        <button
          type="submit"
          className="btn"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "searching" : "search"}
        </button>
      </Form>
    </SearchFormWrapper>
  );
}
