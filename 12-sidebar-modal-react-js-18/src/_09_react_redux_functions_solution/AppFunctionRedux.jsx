import { Modal, Sidebar, Home } from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function AppFunctionRedux() {
  return (
    <Provider store={store}>
      <p className="title">redux functions solution</p>
      <Home />
      <Modal />
      <Sidebar />
    </Provider>
  );
}
