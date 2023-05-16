import ContainerFunctionRedux from "./components/ContainerFunctionRedux";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function AppFunctionRedux() {
  return (
    <Provider store={store}>
      <ContainerFunctionRedux />
    </Provider>
  );
}
