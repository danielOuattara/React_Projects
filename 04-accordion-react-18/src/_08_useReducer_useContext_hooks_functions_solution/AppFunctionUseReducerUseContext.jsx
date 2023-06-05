import QuestionAnswerContextProvider from "./context/QuestionAnswerContext";
import Container from "./components/Container";

export default function AppFunctionUseReducerContext() {
  return (
    <QuestionAnswerContextProvider>
      <Container />
    </QuestionAnswerContextProvider>
  );
}
