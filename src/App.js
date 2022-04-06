
import freecodecampLogo from './imagenes/freecodecamp-logo.png'
import './App.css'
import Boton from './componentes/boton.js';
import Contador from './componentes/contador.js';
import { useState } from 'react'

function App() {

  const [numclicks , setnumclicks] = useState(0);
  const manejarClick = () => {
   setnumclicks(numclicks + 1);
  }
  const reiniciarClick = () => {
    setnumclicks(0)
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='imagen-frecodecamp'
        src={freecodecampLogo}
        alt='Logo de freecodecamp' />    
      </div>
        <div className='contenedor-principal'>
          <Contador numclicks= {numclicks}/>
          <Boton texto= 'Clic'
            esbotonclick= {true} 
            manejarClick={manejarClick} />
          <Boton texto= 'Reiniciar'
            esbotonclick= {false} 
            manejarClick={reiniciarClick} />

        </div>
    </div>
  );
}

export default App;
