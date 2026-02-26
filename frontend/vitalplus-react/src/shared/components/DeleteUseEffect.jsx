// useEffect
//Es un hook que permite ejecutar efectos secundarios en componentes funcionales.
//un efecto secundario es cualquier operacion que: 
// 1- Ocurre fuera del render
// 2- interactia con el mindo exterior al componente
//Ejemplos:
//  - Llamado de APIs
//  - Manipulacion del DOM
//  - Actualizar un titulo del navegador

// import { useEffect, useState } from "react";



//############ SINTAXIS ################
// useEfect(()=> {
//      Efect * 
//}), [];


// ================ Efecto con array vacio ==============

// function DeleteUseEffect (){

//     const [message, setMessage] = useState ("cargando....");

// useEffect( ()=> {

//     setTimeout( ()=> {
//         setMessage("Componente MONTADO")
//     }, 3000);

// },[]);


//     return (
//         <h1>{message}</h1>
//     );

// }

// export default DeleteUseEffect;


// <######################################################################>

//  Hook useEffect con la misma dependencia

//Entender que UseEffect se vuelve a ejecutar cuando Cambia una dependencia
// useEffect puede ejecutarse otra vez si algo cambia
// Ese algo se declara en el array de dependencia

import { useEffect, useState } from "react";

function DeleteUserEffect (){

    const [ count, setCount] = useState(0);
    const [message, setMessage] = useState("contando");

    useEffect(() => {
        setMessage(`El contador cambio a ${count} `);
    },[count]);

    return( 
    <>
        <h2>{ count }</h2>
        <p>{message}</p>

        <button  className="border border-border bg-brand rounded-md " onClick={()=> setCount(count + 1)}> 
            Incrementar
        </button>
    </>
    );
};
export default DeleteUserEffect;


// #################################################
//################### IMPORTANTE ###################
//#################################################
// - Si una depdendencia cambia que tipo de cambia el efecto se ejecuta
// - Si una dependencia cambia el efecto NO se ejecuta
