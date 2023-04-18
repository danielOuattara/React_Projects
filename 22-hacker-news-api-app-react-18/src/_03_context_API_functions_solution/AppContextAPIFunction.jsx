import AppContextProvider from "./context/AppContext";

export default function AppContextAPIFunction() {
  return (
    <AppContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>useContext hook function solution</p>
      <main></main>
    </AppContextProvider>
  );
}
