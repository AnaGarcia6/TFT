import React from "react";

export default function Saludar(props) { 
    const {userInfo, saludarFn} = props; // Esto nos sirve para que en los returno se mas comodo llamar al objeto  props.saludarFn(nombre) en vez de ir paso a paso   props.saludarFn(props.userInfo.nombre)
    const {nombre = "Anonimo", edad} = userInfo;
    return(
        <div>
           <button onClick={()=>props.saludarFn(nombre, edad)}>Saludar</button>
        </div>
    ); 
} 