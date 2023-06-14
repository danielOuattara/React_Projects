import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";

export default function AppFunctionRedux() {
  return (
    <Provider store={store}>
      <p className="title"> redux functions solution</p>
      <Navbar />
    </Provider>
  );
}
