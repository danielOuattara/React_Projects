import { Container } from "./components";
import JobContextProvider from "./context/JobsContext";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <JobContextProvider>
      <Container />
    </JobContextProvider>
  );
}
