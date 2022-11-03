/*
  API Meteo utilisation de fetch
*/
console.log("Hello Word");
// weather[0]icon VA DONNER 
// main.temp VA DONNER 10.56
// Premier contact avec l'API
/*fetch('https://jsonplaceholder.typicode.com/todos/1'), {method: "GET"}
  .then(response => response.json())
  .then(json => console.log(json))
*/

 /* 1.Connection avec l'application via une clef personnelle
 home.openweathermap.org/api_keys call API Ange... API Keys*/
 const apiKey = "6f0d59dfcb080cd8495827d107606a39";

 /* 2.Coordonnées de Liège
 Latitude: 50.6333, Longitude: 5.56667 50° 37′ 60″ Nord, 5° 34′ 0″ Est
 */
const latLiege = 50.6333;
const lonLiege = 5.56667;
const lang = "fr";
const counter = 7; // Les données météo de 7 jours

 /* Connexion avec l'api via l'url suivante : 
 https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=50.6333&lon=5.56667&appid=6f0d59dfcb080cd8495827d107606a39&lang=fr&cnt=7
 */

 // 3.API Call
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latLiege}&lon=${lonLiege}&appid=${apiKey}&lang=${lang}&cnt=${counter}`;
console.log(weatherUrl);

// 4.fetch
fetch(weatherUrl)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
  /*console.log(response); retourne :
    Object
      city: {id: 2792414, name: 'Liège', coord: {…}, country: 'BE', population: 0, …}
      cnt:  7
      cod:  "200"   
      list: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}  
      message:  0
      [[Prototype]]:  Object  
  */

/* 
JavaScript explication de la balise <template>
Avec le tableau créé et le template défini, 
on utilise JavaScript pour insérer des lignes dans le tableau
dont chacune est construite à partir du template.
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

/* ----- Exemple avec Weather */
/* 
if ("content" in document.createElement("template")) {
  // On prépare une ligne pour le tableau
  var template = document.querySelector("#productweather");
  // On clone la ligne et on l'insère dans le tableau
  var tbody = document.querySelector("tbody");
  var clone = document.importNode(template.content, true);
  var td = clone.querySelectorAll("td");
  td[0].textContent = "${list.dt_txt}";
  td[1].textContent = "${list.weather.icon}";
  td[2].textContent = "MAX ${list.main.temp_max}";
  td[3].textContent = "MIN ${list.main.temp_min}";
  td[4].textContent = "VENT ${list.wind.speed}";
  td[5].textContent = "${list.weather.description}";
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
*/

// --------
/* ----- Exemple avec Weather ------ */
// function fetchingDatas(){}

//function fetchingDatas
function fetchingDatas(){
  return fetch(weatherUrl).then((response) => {

    if(response.status >= 200 && response.status < 300){
      return response.json();
    } else {
      return response.json().then((error) => {
        console.log(error);
        throw new Error("Something went wrong - server-side");
      });
    }
    
  });
}

// async function ???
async function displayDatas() {
  const calls = (await fetchingDatas()) || [];
  const callList = calls.list;

    // pour chaque demande à l'API
    callList.forEach((call) => {
      const templateElement = document.importNode(
        document.querySelector("template").content,
        true
      );
      // .textContent ???
      /*
      const element = document.getElementById('does-not-exist');
      console.log(element); // 👉️ null

      // ⛔️ Cannot set properties of null (setting 'textContent')
      element.textContent = 'some content';
      An element with the provided id doesn't exist, so the getElementById method returns a null value. 
      */
      templateElement.getElementById("date").textContent = call.dt_txt;
      document.querySelector("main").appendChild(templateElement);
    });

}
// Appel de fonction
displayDatas();