import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";

export default function AppClassReduxToolkit() {
  return (
    <Provider store={store}>
      <p className="title"> redux toolkit classes solution</p>
      <Navbar />
    </Provider>
  );
}
