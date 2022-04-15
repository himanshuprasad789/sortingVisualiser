function merge(leftarr,rightarr){
    let output=[]
    let leftidx=0;
    let rightidx=0;
    while(leftidx<leftarr.length && rightidx<rightarr[rightidx]){
        if(leftarr[leftidx]<=rightarr[rightidx]){
            output.push(leftarr[leftidx]);
            leftidx++;
            
        }
        else{
            output.push(rightarr[rightidx]);
            rightidx++;
            
            
        }
    }
    return [...output,...leftarr.slice(leftidx),...rightarr.slice(rightidx)]
}

function mergesort(arr) {
    if(arr.length<=1) return arr
    let mididx=Math.floor(arr.length/2)
    let leftarr=arr.slice(0,mididx);
    let rightarr=arr.slice(mididx);
    let sorted=merge(mergesort(leftarr),mergesort(rightarr))
    return sorted
}

export default mergesort