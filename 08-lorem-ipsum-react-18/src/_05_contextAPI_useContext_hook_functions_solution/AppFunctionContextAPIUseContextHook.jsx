import Container from "./components/Container";
import TextGeneratorContextProvider from "./context/TextGeneratorContext";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <TextGeneratorContextProvider>
      <Container />
    </TextGeneratorContextProvider>
  );
}
