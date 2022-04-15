import swap from './../utils/swapelements'
import waitforme from '../utils/waitforme';
const bubblesort= async (arr,time)=>{
    const bars=document.querySelectorAll('.bar');
    console.log(bars)

    for(let i=0;i<arr.length-1;i++){
        for (let j = 0; j <arr.length-i-1; j++) {
            bars[j].style.background = 'cyan'
            bars[j+1].style.background = 'cyan'
            
            // if(arr[j]>arr[j+1]){
            //     // console.log(arr[j],arr[j+1])
            //     let temp=arr[j];
            //     arr[j]=arr[j+1];
            //     arr[j+1]=temp;
            //     // console.log(arr[j],arr[j+1])
            // }
            console.log(parseInt(bars[j].style.height),parseInt(bars[j+1].style.height))
            if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)){
                await waitforme(time);
                swap(bars[j],bars[j+1]);
            }
            bars[j].style.background = 'black';
            bars[j+1].style.background = 'black';

            // console.log(arr[j],arr[j+1],'is sorted')
        }
        bars[bars.length-1-i].style.background = 'green';
    }
    bars[0].style.background = 'green';
}
export default bubblesort;