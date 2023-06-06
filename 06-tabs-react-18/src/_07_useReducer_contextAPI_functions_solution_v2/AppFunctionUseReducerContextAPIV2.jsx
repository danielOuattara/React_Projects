import JobsContextProvider from "./context/JobsContext";
import { Container } from "./components";

export default function AppFunctionUseReducerContextAPIV2() {
  return (
    <JobsContextProvider>
      <Container />
    </JobsContextProvider>
  );
}
