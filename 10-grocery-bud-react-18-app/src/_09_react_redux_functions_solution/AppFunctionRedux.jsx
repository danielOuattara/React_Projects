import { Provider } from "react-redux";
import store from "./redux/store";
import { Container } from "./components";

export default function AppFunctionRedux() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
