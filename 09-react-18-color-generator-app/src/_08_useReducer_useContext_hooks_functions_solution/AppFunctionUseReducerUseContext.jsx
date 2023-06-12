import ColorGeneratorContextProvider from "./context/ColorGeneratorContext";
import { Container } from "./components";

export default function AppFunctionUseReducerUseContext() {
  return (
    <ColorGeneratorContextProvider>
      <Container />
    </ColorGeneratorContextProvider>
  );
}
