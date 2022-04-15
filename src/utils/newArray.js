export default (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(getrandom(10, 100));
  }
  return arr;
};
const getrandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

