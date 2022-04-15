export default (n) => {
  const bars=document.querySelectorAll('.bar');
  for(let bar of bars){
    bar.style.background='black'
  }
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(getrandom(10, 100));
  }
  return arr;
};
const getrandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

