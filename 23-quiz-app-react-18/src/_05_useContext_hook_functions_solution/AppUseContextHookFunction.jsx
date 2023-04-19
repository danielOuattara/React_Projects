import QuizContextProvider from "./context/QuizContext";
import { useQuizContext } from "./context/QuizContext";
import { Loading, Modal, SetupForm } from "./components";

export default function AppUseContextHookFunction() {
  return (
    <QuizContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        {" "}
        05 useContext hook function solution
      </p>
      <SetupForm />
      <Loading />
      <Modal />
    </QuizContextProvider>
  );
}

function App() {
  return <h2>quiz starter</h2>;
}
