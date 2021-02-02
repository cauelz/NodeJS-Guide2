const fs = require('fs');

// -------------------------------------------------------
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// console.log(book);
// console.log(bookJSON); is a string now

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);

// -------------------------------------------------------
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

let dataBuffer = fs.readFileSync('1-json.json');
let dataJSON = dataBuffer.toString();
let data = JSON.parse(dataJSON);
console.log(data);
data.name = 'Cauê';
console.log(data);
dataJSON = JSON.stringify(data);
console.log(dataJSON);
fs.writeFileSync('1-json.json', dataJSON)
