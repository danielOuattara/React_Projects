import ContainerFunctionRedux from "./ContainerFunctionRedux";
import { Provider } from "react-redux";
import store from "./store";

export default function AppFunctionRedux() {
  return (
    <Provider store={store}>
      <ContainerFunctionRedux />
    </Provider>
  );
}
