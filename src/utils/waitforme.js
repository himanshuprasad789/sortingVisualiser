const waitforme=(delay)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(''),delay)
    })
}

export default waitforme
// (async ()=>{
//     for(let i=0;i<10;i++){
//         await waitforme(1000)
//         console.log(i)
//     }
// })()
