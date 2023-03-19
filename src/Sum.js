import React from 'react'

export function Sum({ numbers=[3,8,9,1,4,7]}) {
    const sum =  numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <div>
        <h1> The sum of numbers is {sum} </h1>
    </div>
  )
}
// Sum.defaultProps = {
//     numbers: [3,8,9,1,4,7]
//   };
export default Sum;


// What happens if the numbers prop of the Sum component is not set? ---> Sara' undefined
// How can you set a default value for this prop? 
// --> Possiamo usare 'defaultProps' property oppure settare i valori nel parametro della funzione
