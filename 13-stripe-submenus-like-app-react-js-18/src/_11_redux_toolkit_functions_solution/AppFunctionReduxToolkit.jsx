import { Provider } from "react-redux";
import store from "./redux/store";
import { Hero, Navbar, Sidebar, Submenu } from "./components";

export default function AppFunctionReduxToolkit() {
  return (
    <Provider store={store}>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </Provider>
  );
}
