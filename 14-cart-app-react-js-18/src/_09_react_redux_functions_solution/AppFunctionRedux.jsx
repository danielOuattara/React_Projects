import store from "./redux/store";
import { Provider } from "react-redux";
import { AppContainer } from "./components";

export default function AppFunctionRedux() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
