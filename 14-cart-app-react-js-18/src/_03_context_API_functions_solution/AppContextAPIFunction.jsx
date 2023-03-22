import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import AppContextProvider from "./context/AppContext";

export default function AppContextAPIFunction() {
  return (
    <AppContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>useContext hook function solution</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppContextProvider>
  );
}
