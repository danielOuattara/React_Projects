import { Container } from "./components";
import JobContextProvider from "./context/JobsContext";

export default function AppFunctionContextAPI() {
  return (
    <JobContextProvider>
      <Container />
    </JobContextProvider>
  );
}
