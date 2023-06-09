import ColorGeneratorContextProvider from "./context/ColorGeneratorContext";
import { Container } from "./components";

export default function AppFunctionContextAPI() {
  return (
    <ColorGeneratorContextProvider>
      <Container />
    </ColorGeneratorContextProvider>
  );
}
