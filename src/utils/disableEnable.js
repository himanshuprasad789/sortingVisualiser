const disablechild=()=>{
    const children =document.querySelector('.header').childNodes;
    for(let child of children) {
        child.disabled = true;
    }
}
const enablechild=()=>{
    const children =document.querySelector('.header').childNodes;
    for(let child of children) {
        child.disabled = false;
    }
}
export {disablechild,enablechild}