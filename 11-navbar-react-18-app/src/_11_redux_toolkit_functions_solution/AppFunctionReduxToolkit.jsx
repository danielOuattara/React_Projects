import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <p className="title"> redux toolkit functions solution</p>
      <Navbar />
    </Provider>
  );
}
