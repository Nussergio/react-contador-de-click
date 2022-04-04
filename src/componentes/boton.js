import React from "react";


function boton({texto, esbotonclick, manejarClick}){
  return (
    <boton
    className={esbotonclick ? 'boton-click' : 'boton-reiniciar'}
    onclick={manejarClick}>
      {texto}
    </boton>
  )
}
 export default boton