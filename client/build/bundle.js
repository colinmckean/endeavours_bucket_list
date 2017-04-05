/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Country = __webpack_require__(1);

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
  var name = document.createElement('h2');
  name.innerText = countries[0].name;
  var container = document.querySelector("#searchResult");
  container.innerHTML = '';
  container.appendChild(name);

  var button = document.createElement('button');
  button.innerText = "add to bucket list!";


  button.onclick = function(){
    var country = new Country({name: "does this work"});
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Country = function(options){
  this.name = options.name;
}

module.exports = Country;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map