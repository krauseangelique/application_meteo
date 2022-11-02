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
 https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=50.6333&lon=5.56667&appid=6f0d59dfcb080cd8495827d107606a39&lang=fr&cnt=7
 */

 // API Call
 const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latLiege}&lon=${lonLiege}&appid=${apiKey}&lang=${lang}&cnt=${counter}`;
console.log(weatherUrl);
// fetch
fetch(weatherUrl)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });

/*
JavaScript
Avec le tableau créé et le template défini, on utilise JavaScript pour insérer des lignes dans le tableau dont chacune est construite à partir du template.
*/
// On vérifie si le navigateur prend en charge
// l'élément HTML template en vérifiant la présence
// de l'attribut content pour l'élément template.
if ("content" in document.createElement("template")) {

  // On prépare une ligne pour le tableau
  var template = document.querySelector("#productrow");

  // On clone la ligne et on l'insère dans le tableau
  var tbody = document.querySelector("tbody");
  var clone = document.importNode(template.content, true);
  var td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // On fait de même pour une autre ligne
  var clone2 = document.importNode(template.content, true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // Puis on insère
  tbody.appendChild(clone2);

} else {
  // Une autre méthode pour ajouter les lignes
  // car l'élément HTML n'est pas pris en charge.
  console.error('le navigateur ne prend pas en charge l\'élément HTML template');
}