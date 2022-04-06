import React  from "react";
import '../style-sheets/contador.css'


function Contador ({numclicks}){
  return (
    <div className="contador">
      {numclicks}
    </div>
  )


}
export default Contador;