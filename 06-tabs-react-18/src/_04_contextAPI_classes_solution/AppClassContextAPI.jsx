import { Container } from "./components";
import JobContextProvider from "./context/JobsContext";

export default function AppClassContextAPI() {
  return (
    <JobContextProvider>
      <Container />
    </JobContextProvider>
  );
}
