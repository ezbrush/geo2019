/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// obtener los valores\nvar lat = document.querySelector('#lat').value,\n    lng = document.querySelector('#lng').value,\n    solid = document.querySelector('#soli').value,\n    descripcion = document.querySelector('#descripcion').value;\nconsole.log(lat);\nconsole.log(lng);\nconsole.log(solid);\nconsole.log(descripcion);\nvar map = L.map('mapa').setView([lat, lng], 15); //const map = L.map('mapa');\n\nvar marker;\nvar mk;\ndocument.addEventListener('DOMContentLoaded', function () {\n  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n  }).addTo(map); // Buscador de direccion\n  //const buscador = document.querySelector('#formbuscador');\n  // buscador.addEventListener('input', buscarDireccion);\n});\nvar greenIcon;\n\nif (descripcion == \"ambulancia\") {\n  greenIcon = new L.Icon({\n    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',\n    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',\n    iconSize: [25, 41],\n    iconAnchor: [12, 41],\n    popupAnchor: [1, -34],\n    shadowSize: [41, 41]\n  });\n}\n\nif (descripcion == \"policia\") {\n  greenIcon = new L.Icon({\n    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',\n    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',\n    iconSize: [25, 41],\n    iconAnchor: [12, 41],\n    popupAnchor: [1, -34],\n    shadowSize: [41, 41]\n  });\n}\n\nif (descripcion == \"bombero\") {\n  greenIcon = new L.Icon({\n    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',\n    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',\n    iconSize: [25, 41],\n    iconAnchor: [12, 41],\n    popupAnchor: [1, -34],\n    shadowSize: [41, 41]\n  });\n}\n\nmk = new L.marker([lat, lng], {\n  icon: greenIcon,\n  draggable: true,\n  autoPan: true\n}).addTo(map).bindPopup(descripcion).openPopup();\n\n//# sourceURL=webpack:///./public/js/app.js?");

/***/ })

/******/ });