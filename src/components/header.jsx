import React from 'react'
import '../App.css'
import newArray from '../utils/newArray'
import bubblesort from '../algorithms/bubbleSort'
import mergesort from '../algorithms/mergeSort'
const Header = ({array,setArray,arraySize,handleChange}) => {
  return (
    <div className="header">
        <button onClick={()=>{
            setArray(newArray(arraySize));
        }}>new Array</button>
        <input type="range" min={5} max={150} step={5} onChange={(e)=>{
            handleChange(e);
        }}/>
        <button onClick={()=>{
            const sorted=[...array];
            sorted.sort((a,b)=>a-b)
            console.log('sorted',sorted)
            setArray(sorted);

        }}>sort</button>
        <button onClick={()=>{
            const sorted=[...array];
            bubblesort(sorted)
            console.log('sorted',sorted)
            setArray(sorted);
        }}>bubblesort</button>
        <button onClick={()=>{
            let sorted=[...array];
             sorted=mergesort(sorted)
            console.log('sorted',sorted)
            setArray(sorted);
        }}>mergeesort</button>
    </div>
  )
}

export default Header