import { AppContainer } from "./components";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
