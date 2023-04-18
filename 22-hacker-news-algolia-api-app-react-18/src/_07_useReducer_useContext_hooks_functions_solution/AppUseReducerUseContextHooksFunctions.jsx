import { StoriesContextProvider } from "./context";
import { Button, SearchForm, Stories } from "./components";
export default function AppUseReducerUseContextHooksFunctions() {
  return (
    <StoriesContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution
      </p>
      <main>
        <h2>hacker news starter</h2>
      </main>
    </StoriesContextProvider>
  );
}
