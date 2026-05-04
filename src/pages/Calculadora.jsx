import { useState } from "react";
import "../styles/Calculadora.css";
import casa from "../assets/images/casa.png";

function Calculadora() {
  const [area, setArea] = useState("");
  const [banos, setBanos] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [segundoPiso, setSegundoPiso] = useState("");
  const [garaje, setGaraje] = useState("");

  const calcularPrecio = () => {
    if (!area || !banos || !segundoPiso || !garaje) {
      alert("Completa todos los campos");
      return;
    }

    let precio = parseFloat(area) * 1200000;

    if (segundoPiso === "Si") precio += 50000000;
    if (garaje === "Si") precio += 30000000;

    precio += parseInt(banos) * 10000000;

    if (ubicacion.toLowerCase().includes("medellin")) {
      precio *= 1.2;
    }

    let minimo = Math.round(precio * 0.9);
    let maximo = Math.round(precio * 1.1);

    alert(`$${minimo.toLocaleString()} - $${maximo.toLocaleString()}`);
  };

  return (
    <div className="calculadora-container">
      <div className="Sec2-1">
        <h1>Calculadora de Valor de Inmueble</h1>
        <img src={casa} alt="casa" className="icono-casa" />
      </div>

      <div className="formulario">

        <label>Área del primer piso (m²)</label><br />
        <input
          type="number"
          placeholder="Área del primer piso"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <br /><br />

        <label>¿Tiene segundo piso?</label><br />
        <input type="radio" onChange={() => setSegundoPiso("Si")} /> Si
        <input type="radio" onChange={() => setSegundoPiso("No")} /> No

        <br /><br />
        <label>¿Cuántos baños tiene? </label><br />
        <select value={banos} onChange={(e) => setBanos(e.target.value)}>
          <option value="" disabled>Seleccione...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <br /><br />

        <label>¿Tiene garaje?</label><br />
        <input type="radio" onChange={() => setGaraje("Si")} /> Si
        <input type="radio" onChange={() => setGaraje("No")} /> No

        <br /><br />

        <label>Ubicación</label><br />
        <input
          type="text"
          placeholder="Ubicación"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />

        <br /><br />

        <button onClick={calcularPrecio}>
          Calcular Precio
        </button>
      </div>
    </div>
  );
}

export default Calculadora;