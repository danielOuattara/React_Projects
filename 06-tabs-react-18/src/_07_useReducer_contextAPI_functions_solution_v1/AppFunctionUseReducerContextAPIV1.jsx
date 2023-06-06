import JobsContextProvider from "./context/JobsContext";
import { Container } from "./components";

export default function AppFunctionUseReducerContextAPIV1() {
  return (
    <JobsContextProvider>
      <Container />
    </JobsContextProvider>
  );
}
