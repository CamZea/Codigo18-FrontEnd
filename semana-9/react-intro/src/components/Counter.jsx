//En react maximo es un contenedor principal
import { useState } from "react";
export function Counter(){
//creacion de la variable
  const [counter, setCounter]= useState(0);
  const [name, setName] = useState("")

  const sumar= () => 
    setCounter(counter+1);

  const restar= () => 
    setCounter(counter - 1 );
  
  const handInputValue= (event) => {
    setName (event.target.value);
  }
  // abajo: con {} llamamos a la variable
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={sumar}>Sumar</button> 
      <button onClick={restar}>Restar</button>
      <button >Reset</button>
    </div>

);
  }
