import swap from "./../utils/swapelements";
import waitforme from "../utils/waitforme";
async function selectionsort(arr, time) {
  const bars = document.querySelectorAll(".bar");
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
    
    let minidx = i;
    bars[i].style.background = "blue";
    await waitforme(time)
    for (let j = i + 1; j < n; j++) {
      bars[j].style.background = "red";
      await waitforme(time/2)

      if (parseInt(bars[j].style.height)<parseInt(bars[minidx].style.height)) {
        bars[j].style.background = "red";
          if(minidx!==i){
            bars[minidx].style.background = "black"
          }
          minidx=j;
          continue;
      }
      bars[j].style.background = "black";

    }
    await waitforme(time/2)
    swap(bars[i],bars[minidx]);

    bars[minidx].style.background = "black";
    bars[i].style.background = "green";
    await waitforme(time/2)


    // let temp = arr[minidx];
    // arr[minidx] = arr[i];
    // arr[i] = temp;
  }
  bars[n-1].style.background = "green";
}
export default selectionsort;
// let arr=[94, 88, 78, 43, 78, 32, 12, 98, 77, 24, 44, 47, 73, 65, 72, 24, 99, 92, 79, 29, 68, 39, 15, 99, 48, 20, 89, 63, 41, 92, 31, 32, 56, 96, 40, 15, 24, 53, 53, 64, 21, 87, 26, 36, 71, 77, 53, 93, 29, 90, 94, 80, 66, 31, 44, 39, 52, 31, 59, 78, 85, 91, 12, 38, 61, 35, 24, 84, 88, 81, 40, 86, 56, 77, 16, 80, 14, 67, 58, 33, 12, 71, 17, 93, 66, 83, 26, 49, 83, 30, 11, 30, 23, 29, 13, 50, 86, 32, 78, 83]
// let copy=[...arr]
// selectionsort(arr)
// const areequal=()=>{
//     copy.sort((a,b)=>a-b);
//     let sorted=selectionsort(arr);
//     for(let i=0;i<arr.length;i++){
//         if(copy[i]!==sorted[i]) return false
//     }
//     return true
// }
// console.log(areequal())
