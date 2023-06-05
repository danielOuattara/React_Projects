import { Provider } from "react-redux";
import store from "./redux/store";
import Container from "./components/Container";

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
