import { Home } from "./components";
import { QuizContextProvider } from "./context";

export default function AppUseReducerUseContextHooksFunctionsV2() {
  return (
    <QuizContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution V2 + useCustom hook
        (fetching)
      </p>
      <Home />
    </QuizContextProvider>
  );
}
