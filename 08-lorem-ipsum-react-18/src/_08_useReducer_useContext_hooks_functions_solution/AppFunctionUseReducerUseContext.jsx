import Container from "./components/Container";
import TextGeneratorContextProvider from "./context/TextGeneratorContext";

export default function AppFunctionUseReducerContextAPI() {
  return (
    <TextGeneratorContextProvider>
      <Container />
    </TextGeneratorContextProvider>
  );
}
