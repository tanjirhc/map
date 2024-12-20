// .map() = accepts a callback and applies that function to each of an array, then return a new array

const students = ["Tanjir", "Mohsin", "Rabbi", "Kabir"];
const studentsUpper = students.map(lowerCase);

console.log(students);

function upperCase(element){
  return element.toUpperCase();
}

function lowerCase(element){
  return element.toLowerCase();
}