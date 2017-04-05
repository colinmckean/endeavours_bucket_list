var Country = require('./models/country.js');

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var makePostRequest = function(url, callback, payload){

  console.log(payload);
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // request.onload = callback; // this will be call back for populate bucket list.
  console.log(payload);
  request.send(JSON.stringify(payload));
};

var requestComplete = function(){
  if(this.status !== 200){
    return;
  }
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);

  populateResults(countries);
  
};

var populateResults = function(countries){
  console.log(countries);
  var name = document.createElement('h2');
  name.innerText = countries[0].name;
  var container = document.querySelector("#searchResult");
  var capital = document.createElement('p');
  var population = document.createElement('p');
  population.innerText = "Population: " + countries[0].population.toLocaleString();
  capital.innerText = "Capital: "+ countries[0].capital;
  container.innerHTML = '';
  container.appendChild(name);
  container.appendChild(capital);
  container.appendChild(population);

  var button = document.createElement('button');
  button.innerText = "add to bucket list!";


  button.onclick = function(){

    var country = new Country({name: countries[0].name,capital: countries[0].capital});
    makePostRequest('http://localhost:3000/api/bucket_list ',requestComplete, country);
    console.log("clicked");
  }
  container.appendChild(button);
  // console.log(countries[0]);
}





var app = function(){

  var urlCountry = "https://restcountries.eu/rest/v2/name/";
  
  var query = document.querySelector('#search-query');
  query.onkeypress = function(e){
    if(e.which === 13){
      makeRequest(urlCountry + query.value, requestComplete);
    }
  }



}
window.onload = app;