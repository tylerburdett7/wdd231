/**
 * Refactor towards readability
 */

// let h = document.querySelector('.title');
// let p = document.querySelector('.content');
// let i = document.querySelector('input[type=text]');

// i = parseInt(i.value) * 10;
// h.innerHTML = 'Welcome to the class';

// h = i * 2;

// p.innerHTML = `The value of i is ${i} and the value of h is ${h}`;




let title = document.querySelector('.title');
let content = document.querySelector('.content');

let i = document.querySelector('input[type=text]');
i = parseInt(i.value) * 10;

h.innerHTML = 'Welcome to the class';
h = i * 2;

content.innerHTML = `The value of i is ${i} and the value of h is ${h}`;




/**
 * Refactor towards reuse
 */

let name = "John";
let age = 30;

console.log("Name: ", name);
console.log("Age: " + age);

name = "Jane";
age = 25;

console.log("Name: " + name);
console.log("Age: " + age);





/**
 * Refactor to reduce complexity
 */

const letter = [..."ssalc ot emoclew"];
letter.reverse()[0];

letter2 = 'w';


/**
 * Refactor to improve performance
 */

function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  }
  console.log(findDuplicates([1, 2, 3, 4, 2, 5, 1]));

function findDuplicates(arr){
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        
    }
}