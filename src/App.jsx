import "./App.css";
import { DepartureArrivalProvide } from "./Context/DepartureArrivalContext";
import Header from "./pages/Header";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <DepartureArrivalProvide>
        <Header />
        <Main />
      </DepartureArrivalProvide>
    </>
  );
}

export default App;
