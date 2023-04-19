import { StoriesContextProvider } from "./context";
import { Buttons, SearchForm, Stories } from "./components";
export default function AppUseReducerUseContextHooksFunctions() {
  return (
    <StoriesContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution version 2
      </p>
      <main>
        <SearchForm />
        <Buttons />
        <Stories />
      </main>
    </StoriesContextProvider>
  );
}
