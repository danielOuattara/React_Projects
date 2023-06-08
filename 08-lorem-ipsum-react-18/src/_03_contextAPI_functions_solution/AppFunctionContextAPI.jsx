import Container from "./components/Container";
import TextGeneratorContextProvider from "./context/TextGeneratorContext";

export default function AppFunctionContextAPI() {
  return (
    <TextGeneratorContextProvider>
      <Container />
    </TextGeneratorContextProvider>
  );
}
