import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Home from "./Home";
import Calculadora from "./Calculadora";

function App() {

  const [vista, setVista] = useState("home");

  return (

    <div
      style={{
        background: "#005187",
        minHeight: "100vh",
        overflow: "hidden"
      }}
    >

      <AnimatePresence mode="wait">

        {
          vista === "home" && (

            <motion.div

              key="home"

              initial={{
                opacity: 0,
                scale: 0.96,
                filter: "blur(10px)"
              }}

              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
              }}

              exit={{
                opacity: 0,
                scale: 1.03,
                filter: "blur(10px)"
              }}

              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}

            >

              <Home
                irCalculadora={() => setVista("calculadora")}
              />

            </motion.div>
          )
        }

        {
          vista === "calculadora" && (

            <motion.div

              key="calculadora"

              initial={{
                opacity: 0,
                scale: 0.96,
                filter: "blur(10px)"
              }}

              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
              }}

              exit={{
                opacity: 0,
                scale: 1.03,
                filter: "blur(10px)"
              }}

              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}

            >

              <Calculadora />

            </motion.div>
          )
        }

      </AnimatePresence>

    </div>
  );
}

export default App;