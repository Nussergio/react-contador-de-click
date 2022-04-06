import React from "react";
import '../style-sheets/boton.css'


function Boton({texto, esbotonclick, manejarClick}){
  return (
    <button
    className={esbotonclick ? 'boton-Clic' : 'boton-Reiniciar'}
    onClick={manejarClick} >
      {texto}
    </button>
  )
}
 export default Boton