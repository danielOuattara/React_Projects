import SlidersContextProvider, {
  SlidersContext,
} from "./context/SlidersContext";
import Container from "./components/Container";

export default function AppFunctionContextAPI() {
  return (
    <SlidersContextProvider>
      <SlidersContext.Consumer>
        {(context) => {
          return <Container context={context} />;
        }}
      </SlidersContext.Consumer>
    </SlidersContextProvider>
  );
}
