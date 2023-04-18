import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import AppContextProvider from "./context/AppContext";

export default function AppUseReducerUseContextHooksFunctions() {
  return (
    <AppContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution
      </p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppContextProvider>
  );
}
