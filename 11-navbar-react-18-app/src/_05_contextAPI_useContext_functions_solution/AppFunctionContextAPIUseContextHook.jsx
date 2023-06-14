import Container from "./components/Container";
import NavbarContextProvider from "./context/NavbarContext";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <NavbarContextProvider>
      <Container />
    </NavbarContextProvider>
  );
}
