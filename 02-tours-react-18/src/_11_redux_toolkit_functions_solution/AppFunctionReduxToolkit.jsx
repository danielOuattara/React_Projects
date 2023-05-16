import ContainerFunctionReduxToolkit from "./components/ContainerFunctionReduxToolkit";
import { Provider } from "react-redux";
import store from "./store";

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <ContainerFunctionReduxToolkit />
    </Provider>
  );
}
