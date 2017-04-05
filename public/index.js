
// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = callback;
//   request.send();
// };

// var makePostRequest = function(url, callback, payload){
//   console.log(payload);
//   var request = new XMLHttpRequest();
//   request.open("POST", url);
//   request.setRequestHeader("Content-type", "application/json");
//   request.onload = callback;
//   request.send(payload);
// };

// var requestComplete = function(){
//   if(this.status !== 200){
//     return;
//   }
//   var jsonString = this.responseText;
//   var countries = JSON.parse(jsonString);
 
//  populateResults(countries);
  
// };

// var populateResults = function(countries){
//   var name = document.createElement('h2');
//   name.innerText = countries[0].name;
//   var container = document.querySelector("#searchResult");
//   container.appendChild(name);

//   var button = document.createElement('button');


//   button.onclick = function(){
//     var country = new Country();
//     country.name = "does this work"
//     makePostRequest('/api/bucket_list',requestComplete, country);
//     console.log("clicked");
//   }
//   container.appendChild(button);
//   // console.log(countries[0]);
// }





// var app = function(){

//   var urlCountry = "https://restcountries.eu/rest/v2/name/";
  
//   var query = document.querySelector('#search-query');
//   query.onkeypress = function(e){
//     if(e.which === 13){
//       makeRequest(urlCountry + query.value, requestComplete);
//     }
//   }



// }
// window.onload = app;