// .map() = accepts a callback and applies that function to each of an array, then return a new array

const students = ["Tanjir", "Mohsin", "Rabbi", "Kabir"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element){
  return element.toUpperCase();
}