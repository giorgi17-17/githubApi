import AppRouter from "../routes/Router";
import "./App.css";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </>
  );
}

export default App;
