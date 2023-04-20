import { Home } from "./components";
import { QuizContextProvider } from "./context";

export default function AppUseReducerUseContextHooksFunctionsV1() {
  return (
    <QuizContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution
      </p>
      <Home />
    </QuizContextProvider>
  );
}
