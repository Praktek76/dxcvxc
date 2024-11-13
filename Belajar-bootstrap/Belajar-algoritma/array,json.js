//// array
// biasa
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo4").innerHTML = cars;
// method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML =  "Nomor " + size;
// search
const fruit = ["Apple", "Orange", "Apple", "Mango"];
let position = fruit.indexOf("Apple") + 1;

document.getElementById("demo1").innerHTML = "Apple is found in position " + position;
// sort
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits;

fruits.sort();
document.getElementById("demo3").innerHTML = fruits;
// iteration
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo5").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}
//// json
// array
const myJSON = '["Ford", "BMW", "Fiat"]';
const myArray = JSON.parse(myJSON);
document.getElementById("demo6").innerHTML = myArray;
// parse
const txt1 = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt1);
document.getElementById("demo7").innerHTML = obj.name + ", " + obj.age;
