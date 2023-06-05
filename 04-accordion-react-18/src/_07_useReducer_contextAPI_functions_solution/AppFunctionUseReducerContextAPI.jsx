import QuestionAnswerContextProvider from "./context/QuestionAnswerContext";
import Container from "./components/Container";

export default function AppFunctionUseReducerContextAPI() {
  return (
    <QuestionAnswerContextProvider>
      <Container />
    </QuestionAnswerContextProvider>
  );
}
