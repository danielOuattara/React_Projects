import ColorGeneratorContextProvider from "./context/ColorGeneratorContext";
import { Container } from "./components";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <ColorGeneratorContextProvider>
      <Container />
    </ColorGeneratorContextProvider>
  );
}
