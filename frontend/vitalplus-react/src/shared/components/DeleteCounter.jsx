// import { useState } from "react"

// export default function DeleteCounter(){
    // State es el valor actual de estado 
    // setState es la funcion para actualizarlo
    // useState() es el valor inicial
//     const [count, setCount] = useState()

//     return (
//         <div>
//         <p> Counter:{count} </p>
//         <button onClick={() => setCount(count + 1)}>Incrementar</button>
//         </div>
//     );
// }


// ######################################
// #############CONTADOR#################
// ######################################
export default function DeleteCounter(){ 

let count = 0;
    
    const incrementar  = () => {
    count = ++count;
    console.log("El nuevo valor es: ", count);    
    };

    return (

        <>
        <p>contador: {count} </p>
        <button onClick={incrementar}>Incrementar </button>
        </>
    );
}