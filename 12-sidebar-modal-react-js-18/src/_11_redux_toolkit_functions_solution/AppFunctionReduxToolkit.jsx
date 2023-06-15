import { Modal, Sidebar, Home } from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <p className="title">redux toolkit functions solution</p>
      <Home />
      <Modal />
      <Sidebar />
    </Provider>
  );
}
