import JobsContextProvider from "./context/JobsContext";
import { Container } from "./components";

export default function AppFunctionUseReducerUseContextV2() {
  return (
    <JobsContextProvider>
      <Container />
    </JobsContextProvider>
  );
}
