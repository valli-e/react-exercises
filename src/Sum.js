import React from 'react'

export function Sum({ numbers }) {
    const sum =  numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <div>
        <h1> The sum of numbers is {sum} </h1>
    </div>
  )
}

export default Sum;


//Write a Sum function component that receives a numbers prop (expected to be an array of numbers) 
//and renders the sum of all numbers in the array within a h1 tag..
