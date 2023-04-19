import { StoriesContextProvider } from "./context";
import { Buttons, SearchForm, Stories } from "./components";
export default function AppUseReducerUseContextHooksFunctionsV1() {
  return (
    <StoriesContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution version: 1
      </p>
      <main>
        <SearchForm />
        <Buttons />
        <Stories />
      </main>
    </StoriesContextProvider>
  );
}
