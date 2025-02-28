//
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
// respuesta correcta es "2"

//
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
// respuesta correcta es "[1, 2, 3, 4]"

//
console.log(1 + '1' - 1);
// respuesta correcta es "10"

// 
console.log(typeof NaN);
// respuesta correcta es "number"

//
console.log(0 == '0');
// respuesta correcta es "true"

//
let c = 5;
let v = c++;
console.log(v);
// respuesta correcta es "5"

//
console.log(typeof null);
// respuesta correcta es "object"

//
let n = {};
let m = n;
console.log(n === m);
// respuesta correcta es "true"

//
console.log([] == false);
// respuesta correcta es true

//
let g = 10;
(function() {
  console.log(g);
  let g = 20;
})();
// la respuesta fue ReferenceError
//