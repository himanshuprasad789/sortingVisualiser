const swap=(el1,el2) => {
    let temp = el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height=temp;
}
export default swap