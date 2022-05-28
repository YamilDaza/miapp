import React from "react";

const Description = (props) => {
    return (
        <h2>Bienvenido {props.nombre} al Bootcamp de {props.curso}, de 0 a Full-Stack</h2>
    )
}

export default Description;