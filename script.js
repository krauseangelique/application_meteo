/*
*/
console.log("Hello Word");
// weather[0]icon VA DONNER 
// main.temp VA DONNER 10.56
// Premier contact avec l'API
fetch('https://jsonplaceholder.typicode.com/todos/1'), {method: "GET"}
  .then(response => response.json())
  .then(json => console.log(json))