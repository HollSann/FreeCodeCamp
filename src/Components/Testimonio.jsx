import React from 'react';
import '../Styles/Testimonio.css';
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className="imagen-testimonio" src={require(`../Image/${props.imagen}.png`)} alt="Imagen de Emma" /> {/*Los dos puntos le dice a js que busque un nivel inferior*/}
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}


export default Testimonio;