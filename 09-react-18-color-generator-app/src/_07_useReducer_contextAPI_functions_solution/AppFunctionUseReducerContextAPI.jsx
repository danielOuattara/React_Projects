import ColorGeneratorContextProvider from "./context/ColorGeneratorContext";
import { Container } from "./components";

export default function AppFunctionUseReducerContextAPI() {
  return (
    <ColorGeneratorContextProvider>
      <Container />
    </ColorGeneratorContextProvider>
  );
}
