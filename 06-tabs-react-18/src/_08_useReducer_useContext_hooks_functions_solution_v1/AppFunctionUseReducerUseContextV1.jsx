import JobsContextProvider from "./context/JobsContext";
import { Container } from "./components";

export default function AppFunctionUseReducerUseContextV1() {
  return (
    <JobsContextProvider>
      <Container />
    </JobsContextProvider>
  );
}
