import React, { useState } from "react";
import "../App.css";
import newArray from "../utils/newArray";
import bubblesort from "../algorithms/bubbleSort";
import mergesort from "../algorithms/mergeSort";
import selectionsort from "../algorithms/SelectionSort";
import { disablechild, enablechild } from "../utils/disableEnable";
const Header = ({ array, setArray, arraySize, handleChange }) => {
  const [steptime, setSteptime] = useState(100);
  return (
    <div className="header">
      <button
        onClick={() => {
          setArray(newArray(arraySize));
        }}
      >
        new Array
      </button>
      <input
        type="range"
        min={5}
        max={100}
        step={5}
        onChange={e => {
          handleChange(e);
        }}
      />
      <input
        type="range"
        min={1}
        max={1000}
        step={50}
        onChange={e => {
          const newvalue = e.target.value;

          setSteptime(newvalue);
          console.log(steptime);
        }}
      />
      <button
        onClick={async () => {
          disablechild();
          const sorted = [...array];
          await selectionsort(sorted,steptime)
          enablechild();

          // console.log("sorted", sorted);
          // setArray(sorted);
        }}
      >
        selectionSort
      </button>
      <button
        onClick={async () => {
          disablechild();
          const sorted = [...array];
          await bubblesort(sorted, steptime);
          console.log("sorted", sorted);
          enablechild();
          // setArray(sorted);
          // children.forEach(child=>{
          //     child.disabled = false;
          // })
        }}
      >
        bubblesort
      </button>
      <button
        onClick={() => {
          let sorted = [...array];
          sorted = mergesort(sorted);
          console.log("sorted", sorted);
          setArray(sorted);
        }}
      >
        mergeesort
      </button>
    </div>
  );
};

export default Header;
