//jsx=retorna componente visual
//export default= solo se puede exportar solo 1 función por archivo
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Counter } from "./components/Counter";
export default function App() { 
  const [name, setName] = useState("")

 
  const handInputValue= (event) => {
    setName (event.target.value);
  }
  // abajo: con {} llamamos a la variable
  return (
    <div>
      
      <Header name="Camila"/>
      <Counter />
      <hr />
      <h2>Inputs</h2>
      <p>Nombre: {name}</p>
      <input type="text" value={name} onChange={handInputValue} />


      <Footer name="Tech technology"/>
    </div>

);
  }





  