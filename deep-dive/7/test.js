let text = "";
const array = new Array(100);
const array2 = [1, 2, 3]
// for(const [_, index] in array2.entries()) {
//   console.log(index)
// }

for (let i = 0; i < 100; i++){
  text = text + (i % 10).toString();
}

const text2 = text.substring(0, 300);
console.log(text2.length);
