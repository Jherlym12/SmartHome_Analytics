import "../styles/Home.css";
import logo from "../assets/images/Logo.png"

function Home({ irCalculadora }) {
  return (

      <div className="home-container">

        <div className="home-content">
          <h1 className="home-title">SmartHome Analytics</h1>

          <p className="home-text">
            En un mundo donde el valor de los bienes inmuebles cambia constantemente <br />
            debido a factores como la ubicación, el tamaño y las condiciones del mercado, <br />
            surge la necesidad de contar con herramientas que permitan estimar de manera <br />
            rápida y confiable el precio de una propiedad. Por ello, nuestro proyecto <br />
            consiste en el desarrollo de una calculadora de valor inmobiliario que integra <br />
            diferentes variables para generar una estimación aproximada del valor de <br />
            una vivienda, permitiendo al usuario ingresar datos clave de su inmueble <br />
            y obtener un resultado útil como guía para la toma de decisiones, ya sea para vender, comprar o simplemente conocer su valor actual,
            facilitando así un proceso que muchas veces puede resultar complejo… <br />
          </p>
          <h2 className="pregunta">
            ¿Cuánto vale mi casa?
          </h2>
          <button className="home-button" onClick={irCalculadora}>
            Calcular Valor
          </button>
        </div>

        <img className="home-logo" src={logo} alt="Logo" />

      </div>


  );
}

export default Home;