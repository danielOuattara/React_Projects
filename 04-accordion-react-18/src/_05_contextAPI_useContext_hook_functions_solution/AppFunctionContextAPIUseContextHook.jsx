import QuestionAnswerContextProvider from "./context/QuestionAnswerContext";
import Container from "./components/Container";

function App() {
  return (
    <QuestionAnswerContextProvider>
      <Container />
    </QuestionAnswerContextProvider>
  );
}

export default App;
