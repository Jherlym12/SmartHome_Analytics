import { useState } from "react";
import Home from "./Home";
import Calculadora from "./Calculadora";

function App() {
  const [vista, setVista] = useState("home");

  return (
    <>
      {vista === "home" && (
        <Home irCalculadora={() => setVista("calculadora")} />
      )}

      {vista === "calculadora" && <Calculadora />}
    </>
  );
}

export default App;