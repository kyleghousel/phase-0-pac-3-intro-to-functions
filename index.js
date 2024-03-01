// Follow along with the examples here
function doNothing() {}

names = ["Jenny", "Steve", "Caitie", "Tim"]

function sayHello(arr) {
  i = 0;
  while (i < arr.length) {
    console.log(`Hello, ${arr[i]}!`);
    i++
  }
}
sayHello(names);

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}
sayHelloToLiz();

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
sayHelloToSamip();

function add(x, y) {
  return x + y;
}

const sum = add(50,25);
const summedValue = `The sum of your numbers is: ${sum}.`;
console.log(summedValue);


function sayWhat() {
  console.log("What.");
  return "WHAT";
}
sayWhat();
