import { Home } from "./components";
import { QuizContextProvider } from "./context";

export default function AppUseContextHookFunctionV1() {
  return (
    <QuizContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        {" "}
        05 useContext hook function solution
      </p>
      <Home />
    </QuizContextProvider>
  );
}
