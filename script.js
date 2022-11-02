/*
*/
console.log("Hello Word");
// weather[0]icon VA DONNER 
// main.temp VA DONNER 10.56
// Premier contact avec l'API
/*fetch('https://jsonplaceholder.typicode.com/todos/1'), {method: "GET"}
  .then(response => response.json())
  .then(json => console.log(json))
  */
 /* Connection avec l'application via une clef personnelle
 home.openweathermap.org/api_keys call API Ange... API Keys*/
 const apiKey = "6f0d59dfcb080cd8495827d107606a39";
 /* Coordonnées de Liège
 Latitude: 50.6333, Longitude: 5.56667 50° 37′ 60″ Nord, 5° 34′ 0″ Est
 */
const latLiege = 50.6333;
const lonLiege = 5.56667;

const lang = "fr";
const counter = 7;

 /* Connexion avec l'api via l'url suivante : 
 api.openweathermap.org/data/2.5/forecast?units=metric&lat=50.6333&lon=5.56667&appid=6f0d59dfcb080cd8495827d107606a39&lang=fr&cnt=7
 */

 // API Call
 const weatherUrl = `api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latLiege}&lon=${lonLiege}&appid=${apiKey}&lang=${lang}&cnt=${counter}`;
console.log(weatherUrl);
// fetch
fetch(weatherUrl)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });