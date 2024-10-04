/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: #0F4C75;
}

/* #current {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */

.info {
    border: 5px solid #3282B8;
    text-align: center;
    margin: 1rem;
    background-color: #BBE1FA;
    padding: 0.5rem;
}

.info > div{
    margin: 0.5rem 0 0.5rem 0;
}

.data {
    border: 5px solid #3282B8;
    margin: 1rem;
    margin-bottom: 0rem;
    background-color: #BBE1FA;
}


.icon-img {
    max-height:5rem;
}
.icon-img:hover {
    transform: scale(1.1);
}
/* fix button */
button {
    display: inline-block;
    padding: 0.5em 1.5em;
    border: none;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #000000;
    text-align: center;
    transition: all 0.2s;
    background-color: #FFFFFF;
}   

button:hover {
    color: #000000;
    background-color: #808080;
}


span {
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 0.5rem;
}

input {
    font-size: 1rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
    border: 1px solid black;
    outline: none;
    background-color: #BBE1FA;
    color: #000;
    
    box-shadow: 0 0 0 1px #000;
    
    &:focus {
        box-shadow: 0 0 0 1px #000, 0 0 0 2px #808080;
    }
}

#longitude, #latitude {
    font-size: large;
    text-align: center;
    margin-right: 0.5rem;
}

#resolvedAddress {
    font-size: xx-large;
    text-align: center;
}

#timezone {
    font-size: medium;
    text-align: center;
}

#tzoffset {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.wind {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 1px;
}

span {
    margin-right: 0;
}

.wind-arrow {
    display: inline-block;  
}

svg{
    /* transform-origin: 0.5em 10rem; */
    width: fit-content;
    height: fit-content;
}

#top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 1rem 0; 
}

#top > div {
    align-items: center;
}

#today > div > span {
    color: #BBE1FA;
}

#search > span {
    color: #BBE1FA;
}

#today {
    display: flex;
    gap: 1rem;
}

.temp {
    font-size: 2.5rem;
}

.icon-temp {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
}

.data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 0rem;
}

#data-content {
    display: flex;
    gap: 7rem;
    justify-content: center;
    align-items: center;
}

.data-main {
    margin: 1rem;
    text-wrap: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.data-detail {
    margin: 1rem;
    display: flex;
    gap: 2rem;
}

.data-detail > div > div{
    margin: 1rem 0 1rem 0;
}

.data-detail > div > div > span{
    margin: 1rem 0 1rem 0;
    font-weight: 400;
}

.icon, .feelslike {
    font-size: 1.5rem;
    font-weight: lighter;
}

.windspeed {
    font-weight: 500;
}

#daily-content {
    text-wrap: nowrap;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 1rem 0;
    gap: 1rem;
    overflow: scroll;
}

#daily-content > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: #BBE1FA 5px solid;
    width: fit-content;
    overflow: visible;
    width: max-content;
    padding: 1rem;
}

#daily-content > .days {
    background-color: #BBE1FA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
    border: #0F4C75 3px solid;
}

#daily-content > div > div > .icon-temp > .temp {
    font-size: 2rem;
}

#daily-content > div > div > .icon-temp > .icon-img {
    /* width: 1rem; */
    position: relative;
    width: 4rem;
    height: 4rem;
}

#daily {
    display: flex;
    justify-content: center;
    align-items: center;
    border: #BBE1FA 5px solid;
    margin: 1rem;
    background-color: #3282B8;
}

/* ::-webkit-scrollbar {
    display: none;
    background-color: transparent;
    width: 10rem;
    width: 0.1rem;
    color: #000;
} */

#search {
    margin-left: 2rem;
}

#today {
    display: flex;
    justify-content: center;
    margin-right: 2rem;
}

@supports (scrollbar-color: red blue) {
    * {
        /* scrollbar-color: #808080 #FFFFFF; */
        scrollbar-width: thin;
        scroll-padding: -10rem;
        scroll-behavior: smooth;
        scrollbar-gutter: stable;
        scroll-margin: -10rem 0 -10rem 0;
    }
}

.day-name-content {
    text-align: center;
    align-content: center;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}


select {
  width: 200px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  background-color: #BBE1FA;
  cursor: pointer;
  appearance: none; /* Remove default arrow */
  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}

select:focus {
  outline: none;
  border-color: #aaa;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

select option {
  background-color: #fff;
  color: #333;
  padding: 10px;
}

select option:hover {
  background-color: #f0f0f0;
  color: #333;
}

select option:checked {
  background-color: #ddd;
  color: #333;
  background-image: linear-gradient(45deg, transparent 50%, #333 50%), linear-gradient(135deg, #333 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}

span {
    color: #1B262C;
    text-wrap: none;
}

.data-detail { display:none; }

/* Desktop*/
@media screen and (min-width: 768px) {

    .data-detail  {     
        margin: 1rem;
        display: flex;
        gap: 2rem; 
    }

    #data-content > button {
        display: none;
    }

}

#data-content.expanded {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

#expand {
    background-color: #3282B8;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    background-color: #0F4C75;\n}\n\n/* #current {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n} */\n\n.info {\n    border: 5px solid #3282B8;\n    text-align: center;\n    margin: 1rem;\n    background-color: #BBE1FA;\n    padding: 0.5rem;\n}\n\n.info > div{\n    margin: 0.5rem 0 0.5rem 0;\n}\n\n.data {\n    border: 5px solid #3282B8;\n    margin: 1rem;\n    margin-bottom: 0rem;\n    background-color: #BBE1FA;\n}\n\n\n.icon-img {\n    max-height:5rem;\n}\n.icon-img:hover {\n    transform: scale(1.1);\n}\n/* fix button */\nbutton {\n    display: inline-block;\n    padding: 0.5em 1.5em;\n    border: none;\n    margin: 0 0.3em 0.3em 0;\n    border-radius: 0.12em;\n    box-sizing: border-box;\n    text-decoration: none;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    color: #000000;\n    text-align: center;\n    transition: all 0.2s;\n    background-color: #FFFFFF;\n}   \n\nbutton:hover {\n    color: #000000;\n    background-color: #808080;\n}\n\n\nspan {\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-right: 0.5rem;\n}\n\ninput {\n    font-size: 1rem;\n    margin-right: 0.25rem;\n    padding: 0.25rem;\n    border-radius: 0.25rem;\n    border: 1px solid black;\n    outline: none;\n    background-color: #BBE1FA;\n    color: #000;\n    \n    box-shadow: 0 0 0 1px #000;\n    \n    &:focus {\n        box-shadow: 0 0 0 1px #000, 0 0 0 2px #808080;\n    }\n}\n\n#longitude, #latitude {\n    font-size: large;\n    text-align: center;\n    margin-right: 0.5rem;\n}\n\n#resolvedAddress {\n    font-size: xx-large;\n    text-align: center;\n}\n\n#timezone {\n    font-size: medium;\n    text-align: center;\n}\n\n#tzoffset {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.wind {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 1px;\n}\n\nspan {\n    margin-right: 0;\n}\n\n.wind-arrow {\n    display: inline-block;  \n}\n\nsvg{\n    /* transform-origin: 0.5em 10rem; */\n    width: fit-content;\n    height: fit-content;\n}\n\n#top {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1rem 0 1rem 0; \n}\n\n#top > div {\n    align-items: center;\n}\n\n#today > div > span {\n    color: #BBE1FA;\n}\n\n#search > span {\n    color: #BBE1FA;\n}\n\n#today {\n    display: flex;\n    gap: 1rem;\n}\n\n.temp {\n    font-size: 2.5rem;\n}\n\n.icon-temp {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    gap: 1rem;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    gap: 0rem;\n}\n\n#data-content {\n    display: flex;\n    gap: 7rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.data-main {\n    margin: 1rem;\n    text-wrap: nowrap;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.data-detail {\n    margin: 1rem;\n    display: flex;\n    gap: 2rem;\n}\n\n.data-detail > div > div{\n    margin: 1rem 0 1rem 0;\n}\n\n.data-detail > div > div > span{\n    margin: 1rem 0 1rem 0;\n    font-weight: 400;\n}\n\n.icon, .feelslike {\n    font-size: 1.5rem;\n    font-weight: lighter;\n}\n\n.windspeed {\n    font-weight: 500;\n}\n\n#daily-content {\n    text-wrap: nowrap;\n    display: flex;\n    justify-content: flex-start;\n    margin: 1rem 0 1rem 0;\n    gap: 1rem;\n    overflow: scroll;\n}\n\n#daily-content > div {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    border: #BBE1FA 5px solid;\n    width: fit-content;\n    overflow: visible;\n    width: max-content;\n    padding: 1rem;\n}\n\n#daily-content > .days {\n    background-color: #BBE1FA;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 1rem 0 1rem 0;\n    border: #0F4C75 3px solid;\n}\n\n#daily-content > div > div > .icon-temp > .temp {\n    font-size: 2rem;\n}\n\n#daily-content > div > div > .icon-temp > .icon-img {\n    /* width: 1rem; */\n    position: relative;\n    width: 4rem;\n    height: 4rem;\n}\n\n#daily {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: #BBE1FA 5px solid;\n    margin: 1rem;\n    background-color: #3282B8;\n}\n\n/* ::-webkit-scrollbar {\n    display: none;\n    background-color: transparent;\n    width: 10rem;\n    width: 0.1rem;\n    color: #000;\n} */\n\n#search {\n    margin-left: 2rem;\n}\n\n#today {\n    display: flex;\n    justify-content: center;\n    margin-right: 2rem;\n}\n\n@supports (scrollbar-color: red blue) {\n    * {\n        /* scrollbar-color: #808080 #FFFFFF; */\n        scrollbar-width: thin;\n        scroll-padding: -10rem;\n        scroll-behavior: smooth;\n        scrollbar-gutter: stable;\n        scroll-margin: -10rem 0 -10rem 0;\n    }\n}\n\n.day-name-content {\n    text-align: center;\n    align-content: center;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 1rem;\n}\n\n\nselect {\n  width: 200px;\n  padding: 10px 15px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 16px;\n  color: #333;\n  background-color: #BBE1FA;\n  cursor: pointer;\n  appearance: none; /* Remove default arrow */\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n}\n\nselect:focus {\n  outline: none;\n  border-color: #aaa;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n}\n\nselect option {\n  background-color: #fff;\n  color: #333;\n  padding: 10px;\n}\n\nselect option:hover {\n  background-color: #f0f0f0;\n  color: #333;\n}\n\nselect option:checked {\n  background-color: #ddd;\n  color: #333;\n  background-image: linear-gradient(45deg, transparent 50%, #333 50%), linear-gradient(135deg, #333 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n}\n\nspan {\n    color: #1B262C;\n    text-wrap: none;\n}\n\n.data-detail { display:none; }\n\n/* Desktop*/\n@media screen and (min-width: 768px) {\n\n    .data-detail  {     \n        margin: 1rem;\n        display: flex;\n        gap: 2rem; \n    }\n\n    #data-content > button {\n        display: none;\n    }\n\n}\n\n#data-content.expanded {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n#expand {\n    background-color: #3282B8;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
function l(text) {
    console.log(text)
}

/***/ }),

/***/ "./src/icons/clear-day.svg":
/*!*********************************!*\
  !*** ./src/icons/clear-day.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55f155dffdd173d4bbe5.svg";

/***/ }),

/***/ "./src/icons/clear-night.svg":
/*!***********************************!*\
  !*** ./src/icons/clear-night.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17ac83aa4b47967708fa.svg";

/***/ }),

/***/ "./src/icons/cloudy.svg":
/*!******************************!*\
  !*** ./src/icons/cloudy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57f38995f0f82dd5dc08.svg";

/***/ }),

/***/ "./src/icons/fog.svg":
/*!***************************!*\
  !*** ./src/icons/fog.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5465c93e38463cdf13b3.svg";

/***/ }),

/***/ "./src/icons/hail.svg":
/*!****************************!*\
  !*** ./src/icons/hail.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "136b4e1335cc8985fdff.svg";

/***/ }),

/***/ "./src/icons/partly-cloudy-day.svg":
/*!*****************************************!*\
  !*** ./src/icons/partly-cloudy-day.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb0c783594fd8102cf86.svg";

/***/ }),

/***/ "./src/icons/partly-cloudy-night.svg":
/*!*******************************************!*\
  !*** ./src/icons/partly-cloudy-night.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1726c4a3f3910b9e9ba.svg";

/***/ }),

/***/ "./src/icons/rain-snow-showers-day.svg":
/*!*********************************************!*\
  !*** ./src/icons/rain-snow-showers-day.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbae52cb3b31c779f059.svg";

/***/ }),

/***/ "./src/icons/rain-snow-showers-night.svg":
/*!***********************************************!*\
  !*** ./src/icons/rain-snow-showers-night.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de1d5a55af232398589.svg";

/***/ }),

/***/ "./src/icons/rain-snow.svg":
/*!*********************************!*\
  !*** ./src/icons/rain-snow.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0007ef369b7c54d6283d.svg";

/***/ }),

/***/ "./src/icons/rain.svg":
/*!****************************!*\
  !*** ./src/icons/rain.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e58cc7dcb66f8b2afb5.svg";

/***/ }),

/***/ "./src/icons/showers-day.svg":
/*!***********************************!*\
  !*** ./src/icons/showers-day.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "509a1ba1edc4b13535ad.svg";

/***/ }),

/***/ "./src/icons/showers-night.svg":
/*!*************************************!*\
  !*** ./src/icons/showers-night.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873426b7a281b44ccbe1.svg";

/***/ }),

/***/ "./src/icons/sleet.svg":
/*!*****************************!*\
  !*** ./src/icons/sleet.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d8e4c6395f0482e8470.svg";

/***/ }),

/***/ "./src/icons/snow-showers-day.svg":
/*!****************************************!*\
  !*** ./src/icons/snow-showers-day.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b481263984dc78c37aa.svg";

/***/ }),

/***/ "./src/icons/snow-showers-night.svg":
/*!******************************************!*\
  !*** ./src/icons/snow-showers-night.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91f635208aa0c51ba9cd.svg";

/***/ }),

/***/ "./src/icons/snow.svg":
/*!****************************!*\
  !*** ./src/icons/snow.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cd9d2df6b8a615bb430.svg";

/***/ }),

/***/ "./src/icons/thunder-rain.svg":
/*!************************************!*\
  !*** ./src/icons/thunder-rain.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1832e90c98c53adf9e7.svg";

/***/ }),

/***/ "./src/icons/thunder-showers-day.svg":
/*!*******************************************!*\
  !*** ./src/icons/thunder-showers-day.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d97ccd035616f277d50.svg";

/***/ }),

/***/ "./src/icons/thunder-showers-night.svg":
/*!*********************************************!*\
  !*** ./src/icons/thunder-showers-night.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "935adff480ff6e1dbcca.svg";

/***/ }),

/***/ "./src/icons/thunder.svg":
/*!*******************************!*\
  !*** ./src/icons/thunder.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57b2c0db379d7543e45d.svg";

/***/ }),

/***/ "./src/icons/wind.svg":
/*!****************************!*\
  !*** ./src/icons/wind.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a95427cbc9a431f7838.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./src/logger.js");
/* harmony import */ var _icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/clear-day.svg */ "./src/icons/clear-day.svg");
/* harmony import */ var _icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/clear-night.svg */ "./src/icons/clear-night.svg");
/* harmony import */ var _icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cloudy.svg */ "./src/icons/cloudy.svg");
/* harmony import */ var _icons_fog_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/fog.svg */ "./src/icons/fog.svg");
/* harmony import */ var _icons_hail_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/hail.svg */ "./src/icons/hail.svg");
/* harmony import */ var _icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/partly-cloudy-day.svg */ "./src/icons/partly-cloudy-day.svg");
/* harmony import */ var _icons_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/partly-cloudy-night.svg */ "./src/icons/partly-cloudy-night.svg");
/* harmony import */ var _icons_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/rain-snow-showers-day.svg */ "./src/icons/rain-snow-showers-day.svg");
/* harmony import */ var _icons_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/rain-snow-showers-night.svg */ "./src/icons/rain-snow-showers-night.svg");
/* harmony import */ var _icons_rain_snow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/rain-snow.svg */ "./src/icons/rain-snow.svg");
/* harmony import */ var _icons_rain_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/rain.svg */ "./src/icons/rain.svg");
/* harmony import */ var _icons_showers_day_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/showers-day.svg */ "./src/icons/showers-day.svg");
/* harmony import */ var _icons_showers_night_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/showers-night.svg */ "./src/icons/showers-night.svg");
/* harmony import */ var _icons_sleet_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/sleet.svg */ "./src/icons/sleet.svg");
/* harmony import */ var _icons_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/snow-showers-day.svg */ "./src/icons/snow-showers-day.svg");
/* harmony import */ var _icons_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/snow-showers-night.svg */ "./src/icons/snow-showers-night.svg");
/* harmony import */ var _icons_snow_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/snow.svg */ "./src/icons/snow.svg");
/* harmony import */ var _icons_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icons/thunder-rain.svg */ "./src/icons/thunder-rain.svg");
/* harmony import */ var _icons_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons/thunder-showers-day.svg */ "./src/icons/thunder-showers-day.svg");
/* harmony import */ var _icons_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icons/thunder-showers-night.svg */ "./src/icons/thunder-showers-night.svg");
/* harmony import */ var _icons_thunder_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./icons/thunder.svg */ "./src/icons/thunder.svg");
/* harmony import */ var _icons_wind_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./icons/wind.svg */ "./src/icons/wind.svg");

























// import { get } from "@dotenvx/dotenvx";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"]

const p = document.getElementById('weather');

const metrics = document.getElementById('metrics')
metrics.addEventListener("click", () => changeMetrics())
let tempUnit = " °C"
let longDistanceUnit = " km"
let speedUnit = " kph"

function changeMetrics() 
{
  let url = ""
  switch(metrics.value) {
    case "metric":
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=metric&key=${"ASWY62HZNQNAU7J3WJ5YFGKFS"}&contentType=json`
      tempUnit = " °C"
      longDistanceUnit = " km"
      speedUnit = " kph"
      break
    case "us":
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=us&key=${"ASWY62HZNQNAU7J3WJ5YFGKFS"}&contentType=json`
      tempUnit = " °F"
      longDistanceUnit = " miles"
      speedUnit = " mph"
      break
    case "uk":
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=uk&key=${"ASWY62HZNQNAU7J3WJ5YFGKFS"}&contentType=json`
      tempUnit = " °C"
      longDistanceUnit = " miles"
      speedUnit = " mph"
      break
    default:
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=metric&key=${"ASWY62HZNQNAU7J3WJ5YFGKFS"}&contentType=json`
      break
  }

  getWeather(url)
}


const data = document.getElementsByClassName('data')
const dataContent = document.getElementById('data-content')
const dataDetail = document.getElementsByClassName('test')
const expandButton = document.getElementById('expand')

expandButton.addEventListener('click', () => expandDetails())

function expandDetails()
{
  dataContent.classList.toggle('expanded')
  dataDetail[0].classList.toggle('data-detail')
  data[0].style.height = "fit-content"
  dataDetail[0].style.visibility = !dataDetail[0].style.visibility
  if (expandButton.innerText === "Collapse") 
  {
    expandButton.innerText = "Expand"
  }
  else
  {
    expandButton.innerText = "Collapse"
  }

  (0,_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth)
}

window.addEventListener('resize', checkSize);

function checkSize() {
  (0,_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth)
  if (window.innerWidth > 768) {
    if (expandButton.innerText === "Collapse")
    {
      expandDetails()
    }
  }
  // if (window.innerWidth < 768) {
  //   dataContent.classList.remove('expanded')
  //   dataDetail[0].classList.remove('data-detail')
  //   data[0].style.height = "auto"
  //   dataDetail[0].style.visibility = "hidden"
  //   expandButton.innerText = "Expand"
  // }
}

let defaultUrlWeather = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara/next7days?unitGroup=metric&key=${"ASWY62HZNQNAU7J3WJ5YFGKFS"}&contentType=json`
function getWeather(url)
{
  fetch(url, {
    "method": "GET",
    "headers": {
    }
    })
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response)
    parseTodayWeatherInfoData(response)
    parseTodayWeatherData(response)
    parseWeatherDailyData(response)
  })
  .catch(err => {
    console.error(err);
  });
}
getWeather(defaultUrlWeather)


const input = document.getElementById("location")
input.addEventListener('keypress', (e) => onInputEnter(e));

function onInputEnter(e)
{
  if (e.key === 'Enter')
  {
    let location = e.target.value
    let urlWeather = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${"ASWY62HZNQNAU7J3WJ5YFGKFS"}&contentType=json`
    getWeather(urlWeather)
  }
}

const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const resolvedAddress = document.getElementById('resolvedAddress')
const timezone = document.getElementById('timezone')
const description = document.getElementById('description')

const datetime = document.getElementsByClassName('datetime')
const day = document.getElementsByClassName('day')
const temp = document.getElementsByClassName('temp')
const feelslike = document.getElementsByClassName('feelslike')
const humidity = document.getElementsByClassName('humidity')
const dew = document.getElementsByClassName('dew')
const windspeed = document.getElementsByClassName('windspeed')
const pressure = document.getElementsByClassName('pressure')
const visibility = document.getElementsByClassName('visibility')
const cloudcover = document.getElementsByClassName('cloudcover')
const solarradiation = document.getElementsByClassName('solarradiation')
const solarenergy = document.getElementsByClassName('solarenergy')
const uvindex = document.getElementsByClassName('uvindex')
const icon = document.getElementsByClassName('icon')
const sunrise = document.getElementsByClassName('sunrise')
const sunset = document.getElementsByClassName('sunset')
const moonphase = document.getElementsByClassName('moonphase')
const iconImg = document.getElementsByClassName('icon-img')
const dir = document.getElementsByClassName('dir')
const dayName = document.getElementsByClassName('day-name')



function convertDDToDMS(D){
  return [0|D, '° ', 0|(D=(D<0?-D:D)+1e-4)%1*60, "' ", 0|D*60%1*60, '"'].join('');
}


function parseTodayWeatherInfoData(response)
{
  if (response.longitude > 0)
  {
    longitude.textContent = `${convertDDToDMS(response.longitude)} °E)` 
  }
  else
  {
    longitude.textContent = `${convertDDToDMS(response.longitude)} °W)`
  }
  if (response.latitude > 0)
  {
    latitude.textContent = `(${convertDDToDMS(response.latitude)} °N ,` 
  }
  else
  {
    latitude.textContent = `(${convertDDToDMS(response.latitude)} °S ,` 
  }
  resolvedAddress.textContent = response.resolvedAddress
  if (response.tzoffset === 0)
  {
    timezone.textContent = response.timezone + "  (UTC+00)"
  }
  else if (response.tzoffset < 0)
  {
    let offset = Math.abs(response.tzoffset).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    timezone.textContent = response.timezone + `  (UTC −${offset})`
  }
  else
  {
    let offset = response.tzoffset.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    timezone.textContent = response.timezone + `  (UTC +${offset})`
  }
  description.textContent = response.description
}

function getCurrentDay()
{
  const day = new Date().getDay()
  return days[day]
}

function getOtherDay(next)
{
  let day = new Date().getDay()
  day = day + next
  if (day > 6)
  {
    day = day - 7
  }
  return days[day]
}


function parseTodayWeatherData(response)
{
  datetime[0].textContent = response.days[0].datetime
  day[0].textContent = getCurrentDay() 
  temp[0].textContent = response.days[0].temp + `${tempUnit}`
  feelslike[0].textContent = response.days[0].feelslike + `${tempUnit}`
  humidity[0].textContent = response.days[0].humidity + " %"
  dew[0].textContent = response.days[0].dew + `${tempUnit}`
  windspeed[0].textContent = response.days[0].windspeed + `${speedUnit}`
  dir[0].setAttribute("transform", `translate(20,20)
     rotate(${response.days[0].winddir})`);
  pressure[0].textContent = response.days[0].pressure + " mb"
  visibility[0].textContent = response.days[0].visibility + `${longDistanceUnit}`
  cloudcover[0].textContent = response.days[0].cloudcover + " % "
  solarradiation[0].textContent = response.days[0].solarradiation + " W/m2"
  solarenergy[0].textContent = response.days[0].solarenergy + " MJ/m2"
  uvindex[0].textContent = response.days[0].uvindex
  selectWeatherIcon(response, 0)
  icon[0].textContent = response.days[0].icon.replace("-", " ")
                  .split(' ')
                  .map(word => word.charAt(0)
                  .toUpperCase() + word.substring(1))
                  .join(' ');
  sunrise[0].textContent = response.days[0].sunrise
  sunset[0].textContent = response.days[0].sunset
  moonphase[0].textContent = response.days[0].moonphase
}

function parseWeatherDailyData(response)
{
  for (let i = 1; i < temp.length; i++)
    {
    dayName[i-1].textContent = getOtherDay(i)
    temp[i].textContent = response.days[i].temp + `${tempUnit}`
    selectWeatherIcon(response, i)
    icon[i].textContent = response.days[i].icon.replace("-", " ")
                    .split(' ')
                    .map(word => word.charAt(0)
                    .toUpperCase() + word.substring(1))
                    .join(' ');
    feelslike[i].textContent = response.days[i].feelslike + `${tempUnit}`
    windspeed[i].textContent = response.days[i].windspeed + `${speedUnit}`
    dir[i].setAttribute("transform", `translate(20,20)
       rotate(${response.days[i].winddir})`);
  }

}

function selectWeatherIcon(response, index)
{
  switch (response.days[index].icon) {
    case "clear-day":
      iconImg[index].src = _icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_2__
      break
    case "clear-night":
      iconImg[index].src = _icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_3__
      break
    case "cloudy":
      iconImg[index].src = _icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__
      break
    case "fog":
      iconImg[index].src = _icons_fog_svg__WEBPACK_IMPORTED_MODULE_5__
      break
    case "hail":
      iconImg[index].src = _icons_hail_svg__WEBPACK_IMPORTED_MODULE_6__
      break
    case "partly-cloudy-day":
      iconImg[index].src = _icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_7__
      break
    case "partly-cloudy-night":
      iconImg[index].src = _icons_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_8__
      break
    case "rain-snow-showers-day":
      iconImg[index].src = _icons_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_9__
      break
    case "rain-snow-showers-night":
      iconImg[index].src = _icons_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_10__
      break
    case "rain-snow":
      iconImg[index].src = _icons_rain_snow_svg__WEBPACK_IMPORTED_MODULE_11__
      break
    case "rain":
      iconImg[index].src = _icons_rain_svg__WEBPACK_IMPORTED_MODULE_12__
      break
    case "showers-day":
      iconImg[index].src = _icons_showers_day_svg__WEBPACK_IMPORTED_MODULE_13__
      break
    case "showers-night":
      iconImg[index].src = _icons_showers_night_svg__WEBPACK_IMPORTED_MODULE_14__
      break
    case "sleet":
      iconImg[index].src = _icons_sleet_svg__WEBPACK_IMPORTED_MODULE_15__
      break
    case "snow-showers-day":
      iconImg[index].src = _icons_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_16__
      break
    case "snow-showers-night":
      iconImg[index].src = _icons_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_17__
      break
    case "snow":
      iconImg[index].src = _icons_snow_svg__WEBPACK_IMPORTED_MODULE_18__
      break
    case "thunder-rain":
      iconImg[index].src = _icons_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_19__
      break
    case "thunder-showers-day":
      iconImg[index].src = _icons_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_20__
      break
    case "thunder-showers-night":
      iconImg[index].src = _icons_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_21__
      break
    case "thunder":
      iconImg[index].src = _icons_thunder_svg__WEBPACK_IMPORTED_MODULE_22__
      break
    case "wind":
      iconImg[index].src = _icons_wind_svg__WEBPACK_IMPORTED_MODULE_23__
      break
    default:
      iconImg[index].src = "#"
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFB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ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzaWMtd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Jhc2ljLXdlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmFzaWMtd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXNpYy13ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXNpYy13ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jhc2ljLXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jhc2ljLXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXNpYy13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9iYXNpYy13ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2ljLXdlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmFzaWMtd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFzaWMtd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Jhc2ljLXdlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNpYy13ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzaWMtd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXNpYy13ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXNpYy13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY0Qzc1O1xufVxuXG4vKiAjY3VycmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59ICovXG5cbi5pbmZvIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzI4MkI4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRTFGQTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5pbmZvID4gZGl2e1xuICAgIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XG59XG5cbi5kYXRhIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzI4MkI4O1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkUxRkE7XG59XG5cblxuLmljb24taW1nIHtcbiAgICBtYXgtaGVpZ2h0OjVyZW07XG59XG4uaWNvbi1pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi8qIGZpeCBidXR0b24gKi9cbmJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4zZW0gMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59ICAgXG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcbn1cblxuXG5zcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRTFGQTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDAsIDAgMCAwIDJweCAjODA4MDgwO1xuICAgIH1cbn1cblxuI2xvbmdpdHVkZSwgI2xhdGl0dWRlIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuI3Jlc29sdmVkQWRkcmVzcyB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aW1lem9uZSB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdHpvZmZzZXQge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cblxuLndpbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcHg7XG59XG5cbnNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLndpbmQtYXJyb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxufVxuXG5zdmd7XG4gICAgLyogdHJhbnNmb3JtLW9yaWdpbjogMC41ZW0gMTByZW07ICovXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbiN0b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwOyBcbn1cblxuI3RvcCA+IGRpdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3RvZGF5ID4gZGl2ID4gc3BhbiB7XG4gICAgY29sb3I6ICNCQkUxRkE7XG59XG5cbiNzZWFyY2ggPiBzcGFuIHtcbiAgICBjb2xvcjogI0JCRTFGQTtcbn1cblxuI3RvZGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnRlbXAge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uaWNvbi10ZW1wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZ2FwOiAwcmVtO1xufVxuXG4jZGF0YS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogN3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0YS1tYWluIHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdGV4dC13cmFwOiBub3dyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRhdGEtZGV0YWlsIHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5kYXRhLWRldGFpbCA+IGRpdiA+IGRpdntcbiAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XG59XG5cbi5kYXRhLWRldGFpbCA+IGRpdiA+IGRpdiA+IHNwYW57XG4gICAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pY29uLCAuZmVlbHNsaWtlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLndpbmRzcGVlZCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2RhaWx5LWNvbnRlbnQge1xuICAgIHRleHQtd3JhcDogbm93cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcbiAgICBnYXA6IDFyZW07XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuI2RhaWx5LWNvbnRlbnQgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgYm9yZGVyOiAjQkJFMUZBIDVweCBzb2xpZDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbiNkYWlseS1jb250ZW50ID4gLmRheXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkUxRkE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XG4gICAgYm9yZGVyOiAjMEY0Qzc1IDNweCBzb2xpZDtcbn1cblxuI2RhaWx5LWNvbnRlbnQgPiBkaXYgPiBkaXYgPiAuaWNvbi10ZW1wID4gLnRlbXAge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI2RhaWx5LWNvbnRlbnQgPiBkaXYgPiBkaXYgPiAuaWNvbi10ZW1wID4gLmljb24taW1nIHtcbiAgICAvKiB3aWR0aDogMXJlbTsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xufVxuXG4jZGFpbHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6ICNCQkUxRkEgNXB4IHNvbGlkO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI4MkI4O1xufVxuXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICB3aWR0aDogMC4xcmVtO1xuICAgIGNvbG9yOiAjMDAwO1xufSAqL1xuXG4jc2VhcmNoIHtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cblxuI3RvZGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuQHN1cHBvcnRzIChzY3JvbGxiYXItY29sb3I6IHJlZCBibHVlKSB7XG4gICAgKiB7XG4gICAgICAgIC8qIHNjcm9sbGJhci1jb2xvcjogIzgwODA4MCAjRkZGRkZGOyAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgICAgIHNjcm9sbC1wYWRkaW5nOiAtMTByZW07XG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XG4gICAgICAgIHNjcm9sbC1tYXJnaW46IC0xMHJlbSAwIC0xMHJlbSAwO1xuICAgIH1cbn1cblxuLmRheS1uYW1lLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5cbnNlbGVjdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkUxRkE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYXBwZWFyYW5jZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYXJyb3cgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAyLjVlbSkgMC41ZW07XG4gIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMXB4IDEuNWVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICNhYWE7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5zZWxlY3Qgb3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnNlbGVjdCBvcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBjb2xvcjogIzMzMztcbn1cblxuc2VsZWN0IG9wdGlvbjpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCAjMzMzIDUwJSksIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzMzMgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMi41ZW0pIDAuNWVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHgsIDVweCA1cHgsIDFweCAxLjVlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuc3BhbiB7XG4gICAgY29sb3I6ICMxQjI2MkM7XG4gICAgdGV4dC13cmFwOiBub25lO1xufVxuXG4uZGF0YS1kZXRhaWwgeyBkaXNwbGF5Om5vbmU7IH1cblxuLyogRGVza3RvcCovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmRhdGEtZGV0YWlsICB7ICAgICBcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDJyZW07IFxuICAgIH1cblxuICAgICNkYXRhLWNvbnRlbnQgPiBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufVxuXG4jZGF0YS1jb250ZW50LmV4cGFuZGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbiNleHBhbmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjgyQjg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0EsZUFBZTtBQUNmO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFv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QUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixnQ0FBZ0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBRSx5QkFBeUI7RUFDM0MsdUhBQXVIO0VBQ3ZILG1IQUFtSDtFQUNuSCw0Q0FBNEM7RUFDNUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVIQUF1SDtFQUN2SCxtSEFBbUg7RUFDbkgsNENBQTRDO0VBQzVDLDRCQUE0QjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBLGVBQWUsWUFBWSxFQUFFOztBQUU3QixXQUFXO0FBQ1g7O0lBRUk7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0FBRUo7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY0Qzc1O1xcbn1cXG5cXG4vKiAjY3VycmVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gKi9cXG5cXG4uaW5mbyB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzMjgyQjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJFMUZBO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5pbmZvID4gZGl2e1xcbiAgICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xcbn1cXG5cXG4uZGF0YSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzMjgyQjg7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRTFGQTtcXG59XFxuXFxuXFxuLmljb24taW1nIHtcXG4gICAgbWF4LWhlaWdodDo1cmVtO1xcbn1cXG4uaWNvbi1pbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qIGZpeCBidXR0b24gKi9cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjogMCAwLjNlbSAwLjNlbSAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59ICAgXFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxufVxcblxcblxcbnNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRTFGQTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIFxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDtcXG4gICAgXFxuICAgICY6Zm9jdXMge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDAsIDAgMCAwIDJweCAjODA4MDgwO1xcbiAgICB9XFxufVxcblxcbiNsb25naXR1ZGUsICNsYXRpdHVkZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNyZXNvbHZlZEFkZHJlc3Mge1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0aW1lem9uZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0em9mZnNldCB7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLndpbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4ud2luZC1hcnJvdyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxcbn1cXG5cXG5zdmd7XFxuICAgIC8qIHRyYW5zZm9ybS1vcmlnaW46IDAuNWVtIDEwcmVtOyAqL1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiN0b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gMDsgXFxufVxcblxcbiN0b3AgPiBkaXYge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXkgPiBkaXYgPiBzcGFuIHtcXG4gICAgY29sb3I6ICNCQkUxRkE7XFxufVxcblxcbiNzZWFyY2ggPiBzcGFuIHtcXG4gICAgY29sb3I6ICNCQkUxRkE7XFxufVxcblxcbiN0b2RheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRlbXAge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmljb24tdGVtcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGF0YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDByZW07XFxufVxcblxcbiNkYXRhLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YS1tYWluIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGF0YS1kZXRhaWwge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmRhdGEtZGV0YWlsID4gZGl2ID4gZGl2e1xcbiAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxufVxcblxcbi5kYXRhLWRldGFpbCA+IGRpdiA+IGRpdiA+IHNwYW57XFxuICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmljb24sIC5mZWVsc2xpa2Uge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZGFpbHktY29udGVudCB7XFxuICAgIHRleHQtd3JhcDogbm93cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jZGFpbHktY29udGVudCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyOiAjQkJFMUZBIDVweCBzb2xpZDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZGFpbHktY29udGVudCA+IC5kYXlzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRTFGQTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxuICAgIGJvcmRlcjogIzBGNEM3NSAzcHggc29saWQ7XFxufVxcblxcbiNkYWlseS1jb250ZW50ID4gZGl2ID4gZGl2ID4gLmljb24tdGVtcCA+IC50ZW1wIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jZGFpbHktY29udGVudCA+IGRpdiA+IGRpdiA+IC5pY29uLXRlbXAgPiAuaWNvbi1pbWcge1xcbiAgICAvKiB3aWR0aDogMXJlbTsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4jZGFpbHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAjQkJFMUZBIDVweCBzb2xpZDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI4MkI4O1xcbn1cXG5cXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgd2lkdGg6IDAuMXJlbTtcXG4gICAgY29sb3I6ICMwMDA7XFxufSAqL1xcblxcbiNzZWFyY2gge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuI3RvZGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuQHN1cHBvcnRzIChzY3JvbGxiYXItY29sb3I6IHJlZCBibHVlKSB7XFxuICAgICoge1xcbiAgICAgICAgLyogc2Nyb2xsYmFyLWNvbG9yOiAjODA4MDgwICNGRkZGRkY7ICovXFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgICAgICBzY3JvbGwtcGFkZGluZzogLTEwcmVtO1xcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgICAgICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XFxuICAgICAgICBzY3JvbGwtbWFyZ2luOiAtMTByZW0gMCAtMTByZW0gMDtcXG4gICAgfVxcbn1cXG5cXG4uZGF5LW5hbWUtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkUxRkE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhcHBlYXJhbmNlOiBub25lOyAvKiBSZW1vdmUgZGVmYXVsdCBhcnJvdyAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMi41ZW0pIDAuNWVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5zZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5zZWxlY3Qgb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbnNlbGVjdCBvcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5zZWxlY3Qgb3B0aW9uOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsICMzMzMgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzMzMyA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMi41ZW0pIDAuNWVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgY29sb3I6ICMxQjI2MkM7XFxuICAgIHRleHQtd3JhcDogbm9uZTtcXG59XFxuXFxuLmRhdGEtZGV0YWlsIHsgZGlzcGxheTpub25lOyB9XFxuXFxuLyogRGVza3RvcCovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gICAgLmRhdGEtZGV0YWlsICB7ICAgICBcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDJyZW07IFxcbiAgICB9XFxuXFxuICAgICNkYXRhLWNvbnRlbnQgPiBidXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbn1cXG5cXG4jZGF0YS1jb250ZW50LmV4cGFuZGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI2V4cGFuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjgyQjg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbCh0ZXh0KSB7XG4gICAgY29uc29sZS5sb2codGV4dClcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBsIGZyb20gJy4vbG9nZ2VyLmpzJ1xuXG5pbXBvcnQgY2xlYXJEYXkgZnJvbSBcIi4vaWNvbnMvY2xlYXItZGF5LnN2Z1wiXG5pbXBvcnQgY2xlYXJOaWdodCBmcm9tIFwiLi9pY29ucy9jbGVhci1uaWdodC5zdmdcIlxuaW1wb3J0IGNsb3VkeSBmcm9tIFwiLi9pY29ucy9jbG91ZHkuc3ZnXCJcbmltcG9ydCBmb2cgZnJvbSBcIi4vaWNvbnMvZm9nLnN2Z1wiXG5pbXBvcnQgaGFpbCBmcm9tIFwiLi9pY29ucy9oYWlsLnN2Z1wiXG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5IGZyb20gXCIuL2ljb25zL3BhcnRseS1jbG91ZHktZGF5LnN2Z1wiXG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHQgZnJvbSBcIi4vaWNvbnMvcGFydGx5LWNsb3VkeS1uaWdodC5zdmdcIlxuaW1wb3J0IHJhaW5Tbm93U2hvd2Vyc0RheSBmcm9tIFwiLi9pY29ucy9yYWluLXNub3ctc2hvd2Vycy1kYXkuc3ZnXCJcbmltcG9ydCByYWluU25vd1Nob3dlcnNOaWdodCBmcm9tIFwiLi9pY29ucy9yYWluLXNub3ctc2hvd2Vycy1uaWdodC5zdmdcIlxuaW1wb3J0IHJhaW5Tbm93IGZyb20gXCIuL2ljb25zL3JhaW4tc25vdy5zdmdcIlxuaW1wb3J0IHJhaW4gZnJvbSBcIi4vaWNvbnMvcmFpbi5zdmdcIlxuaW1wb3J0IHNob3dlcnNEYXkgZnJvbSBcIi4vaWNvbnMvc2hvd2Vycy1kYXkuc3ZnXCJcbmltcG9ydCBzaG93ZXJzTmlnaHQgZnJvbSBcIi4vaWNvbnMvc2hvd2Vycy1uaWdodC5zdmdcIlxuaW1wb3J0IHNsZWV0IGZyb20gXCIuL2ljb25zL3NsZWV0LnN2Z1wiXG5pbXBvcnQgc25vd1Nob3dlcnNEYXkgZnJvbSBcIi4vaWNvbnMvc25vdy1zaG93ZXJzLWRheS5zdmdcIlxuaW1wb3J0IHNub3dTaG93ZXJzTmlnaHQgZnJvbSBcIi4vaWNvbnMvc25vdy1zaG93ZXJzLW5pZ2h0LnN2Z1wiXG5pbXBvcnQgc25vdyBmcm9tIFwiLi9pY29ucy9zbm93LnN2Z1wiXG5pbXBvcnQgdGh1bmRlclJhaW4gZnJvbSBcIi4vaWNvbnMvdGh1bmRlci1yYWluLnN2Z1wiXG5pbXBvcnQgdGh1bmRlclNob3dlcnNEYXkgZnJvbSBcIi4vaWNvbnMvdGh1bmRlci1zaG93ZXJzLWRheS5zdmdcIlxuaW1wb3J0IHRodW5kZXJTaG93ZXJzTmlnaHQgZnJvbSBcIi4vaWNvbnMvdGh1bmRlci1zaG93ZXJzLW5pZ2h0LnN2Z1wiXG5pbXBvcnQgdGh1bmRlciBmcm9tIFwiLi9pY29ucy90aHVuZGVyLnN2Z1wiXG5pbXBvcnQgd2luZCBmcm9tIFwiLi9pY29ucy93aW5kLnN2Z1wiXG4vLyBpbXBvcnQgeyBnZXQgfSBmcm9tIFwiQGRvdGVudngvZG90ZW52eFwiO1xuXG5jb25zdCBkYXlzID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcbiAgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG5cbmNvbnN0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpO1xuXG5jb25zdCBtZXRyaWNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldHJpY3MnKVxubWV0cmljcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlTWV0cmljcygpKVxubGV0IHRlbXBVbml0ID0gXCIgwrBDXCJcbmxldCBsb25nRGlzdGFuY2VVbml0ID0gXCIga21cIlxubGV0IHNwZWVkVW5pdCA9IFwiIGtwaFwiXG5cbmZ1bmN0aW9uIGNoYW5nZU1ldHJpY3MoKSBcbntcbiAgbGV0IHVybCA9IFwiXCJcbiAgc3dpdGNoKG1ldHJpY3MudmFsdWUpIHtcbiAgICBjYXNlIFwibWV0cmljXCI6XG4gICAgICB1cmwgPSBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvYW5rYXJhL25leHQ3ZGF5cz91bml0R3JvdXA9bWV0cmljJmtleT0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWX0mY29udGVudFR5cGU9anNvbmBcbiAgICAgIHRlbXBVbml0ID0gXCIgwrBDXCJcbiAgICAgIGxvbmdEaXN0YW5jZVVuaXQgPSBcIiBrbVwiXG4gICAgICBzcGVlZFVuaXQgPSBcIiBrcGhcIlxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwidXNcIjpcbiAgICAgIHVybCA9IGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9hbmthcmEvbmV4dDdkYXlzP3VuaXRHcm91cD11cyZrZXk9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVl9JmNvbnRlbnRUeXBlPWpzb25gXG4gICAgICB0ZW1wVW5pdCA9IFwiIMKwRlwiXG4gICAgICBsb25nRGlzdGFuY2VVbml0ID0gXCIgbWlsZXNcIlxuICAgICAgc3BlZWRVbml0ID0gXCIgbXBoXCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInVrXCI6XG4gICAgICB1cmwgPSBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvYW5rYXJhL25leHQ3ZGF5cz91bml0R3JvdXA9dWsma2V5PSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZfSZjb250ZW50VHlwZT1qc29uYFxuICAgICAgdGVtcFVuaXQgPSBcIiDCsENcIlxuICAgICAgbG9uZ0Rpc3RhbmNlVW5pdCA9IFwiIG1pbGVzXCJcbiAgICAgIHNwZWVkVW5pdCA9IFwiIG1waFwiXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB1cmwgPSBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvYW5rYXJhL25leHQ3ZGF5cz91bml0R3JvdXA9bWV0cmljJmtleT0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWX0mY29udGVudFR5cGU9anNvbmBcbiAgICAgIGJyZWFrXG4gIH1cblxuICBnZXRXZWF0aGVyKHVybClcbn1cblxuXG5jb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0YScpXG5jb25zdCBkYXRhQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhLWNvbnRlbnQnKVxuY29uc3QgZGF0YURldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rlc3QnKVxuY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGFuZCcpXG5cbmV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGV4cGFuZERldGFpbHMoKSlcblxuZnVuY3Rpb24gZXhwYW5kRGV0YWlscygpXG57XG4gIGRhdGFDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJylcbiAgZGF0YURldGFpbFswXS5jbGFzc0xpc3QudG9nZ2xlKCdkYXRhLWRldGFpbCcpXG4gIGRhdGFbMF0uc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiXG4gIGRhdGFEZXRhaWxbMF0uc3R5bGUudmlzaWJpbGl0eSA9ICFkYXRhRGV0YWlsWzBdLnN0eWxlLnZpc2liaWxpdHlcbiAgaWYgKGV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPT09IFwiQ29sbGFwc2VcIikgXG4gIHtcbiAgICBleHBhbmRCdXR0b24uaW5uZXJUZXh0ID0gXCJFeHBhbmRcIlxuICB9XG4gIGVsc2VcbiAge1xuICAgIGV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSBcIkNvbGxhcHNlXCJcbiAgfVxuXG4gIGwod2luZG93LmlubmVyV2lkdGgpXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGVja1NpemUpO1xuXG5mdW5jdGlvbiBjaGVja1NpemUoKSB7XG4gIGwod2luZG93LmlubmVyV2lkdGgpXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgIGlmIChleHBhbmRCdXR0b24uaW5uZXJUZXh0ID09PSBcIkNvbGxhcHNlXCIpXG4gICAge1xuICAgICAgZXhwYW5kRGV0YWlscygpXG4gICAgfVxuICB9XG4gIC8vIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAvLyAgIGRhdGFDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJylcbiAgLy8gICBkYXRhRGV0YWlsWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2RhdGEtZGV0YWlsJylcbiAgLy8gICBkYXRhWzBdLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiXG4gIC8vICAgZGF0YURldGFpbFswXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAvLyAgIGV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSBcIkV4cGFuZFwiXG4gIC8vIH1cbn1cblxubGV0IGRlZmF1bHRVcmxXZWF0aGVyID0gYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL2Fua2FyYS9uZXh0N2RheXM/dW5pdEdyb3VwPW1ldHJpYyZrZXk9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVl9JmNvbnRlbnRUeXBlPWpzb25gXG5mdW5jdGlvbiBnZXRXZWF0aGVyKHVybClcbntcbiAgZmV0Y2godXJsLCB7XG4gICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICBcImhlYWRlcnNcIjoge1xuICAgIH1cbiAgICB9KVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHBhcnNlVG9kYXlXZWF0aGVySW5mb0RhdGEocmVzcG9uc2UpXG4gICAgcGFyc2VUb2RheVdlYXRoZXJEYXRhKHJlc3BvbnNlKVxuICAgIHBhcnNlV2VhdGhlckRhaWx5RGF0YShyZXNwb25zZSlcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9KTtcbn1cbmdldFdlYXRoZXIoZGVmYXVsdFVybFdlYXRoZXIpXG5cblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiBvbklucHV0RW50ZXIoZSkpO1xuXG5mdW5jdGlvbiBvbklucHV0RW50ZXIoZSlcbntcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKVxuICB7XG4gICAgbGV0IGxvY2F0aW9uID0gZS50YXJnZXQudmFsdWVcbiAgICBsZXQgdXJsV2VhdGhlciA9IGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT91bml0R3JvdXA9bWV0cmljJmtleT0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWX0mY29udGVudFR5cGU9anNvbmBcbiAgICBnZXRXZWF0aGVyKHVybFdlYXRoZXIpXG4gIH1cbn1cblxuY29uc3QgbGF0aXR1ZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0aXR1ZGUnKVxuY29uc3QgbG9uZ2l0dWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvbmdpdHVkZScpXG5jb25zdCByZXNvbHZlZEFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x2ZWRBZGRyZXNzJylcbmNvbnN0IHRpbWV6b25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWV6b25lJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcblxuY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRldGltZScpXG5jb25zdCBkYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXknKVxuY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXAnKVxuY29uc3QgZmVlbHNsaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlbHNsaWtlJylcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHknKVxuY29uc3QgZGV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV3JylcbmNvbnN0IHdpbmRzcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmRzcGVlZCcpXG5jb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlJylcbmNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aXNpYmlsaXR5JylcbmNvbnN0IGNsb3VkY292ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG91ZGNvdmVyJylcbmNvbnN0IHNvbGFycmFkaWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc29sYXJyYWRpYXRpb24nKVxuY29uc3Qgc29sYXJlbmVyZ3kgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb2xhcmVuZXJneScpXG5jb25zdCB1dmluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndXZpbmRleCcpXG5jb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWNvbicpXG5jb25zdCBzdW5yaXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VucmlzZScpXG5jb25zdCBzdW5zZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdW5zZXQnKVxuY29uc3QgbW9vbnBoYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9vbnBoYXNlJylcbmNvbnN0IGljb25JbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpY29uLWltZycpXG5jb25zdCBkaXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaXInKVxuY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RheS1uYW1lJylcblxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRERFRvRE1TKEQpe1xuICByZXR1cm4gWzB8RCwgJ8KwICcsIDB8KEQ9KEQ8MD8tRDpEKSsxZS00KSUxKjYwLCBcIicgXCIsIDB8RCo2MCUxKjYwLCAnXCInXS5qb2luKCcnKTtcbn1cblxuXG5mdW5jdGlvbiBwYXJzZVRvZGF5V2VhdGhlckluZm9EYXRhKHJlc3BvbnNlKVxue1xuICBpZiAocmVzcG9uc2UubG9uZ2l0dWRlID4gMClcbiAge1xuICAgIGxvbmdpdHVkZS50ZXh0Q29udGVudCA9IGAke2NvbnZlcnRERFRvRE1TKHJlc3BvbnNlLmxvbmdpdHVkZSl9IMKwRSlgIFxuICB9XG4gIGVsc2VcbiAge1xuICAgIGxvbmdpdHVkZS50ZXh0Q29udGVudCA9IGAke2NvbnZlcnRERFRvRE1TKHJlc3BvbnNlLmxvbmdpdHVkZSl9IMKwVylgXG4gIH1cbiAgaWYgKHJlc3BvbnNlLmxhdGl0dWRlID4gMClcbiAge1xuICAgIGxhdGl0dWRlLnRleHRDb250ZW50ID0gYCgke2NvbnZlcnRERFRvRE1TKHJlc3BvbnNlLmxhdGl0dWRlKX0gwrBOICxgIFxuICB9XG4gIGVsc2VcbiAge1xuICAgIGxhdGl0dWRlLnRleHRDb250ZW50ID0gYCgke2NvbnZlcnRERFRvRE1TKHJlc3BvbnNlLmxhdGl0dWRlKX0gwrBTICxgIFxuICB9XG4gIHJlc29sdmVkQWRkcmVzcy50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnJlc29sdmVkQWRkcmVzc1xuICBpZiAocmVzcG9uc2UudHpvZmZzZXQgPT09IDApXG4gIHtcbiAgICB0aW1lem9uZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnRpbWV6b25lICsgXCIgIChVVEMrMDApXCJcbiAgfVxuICBlbHNlIGlmIChyZXNwb25zZS50em9mZnNldCA8IDApXG4gIHtcbiAgICBsZXQgb2Zmc2V0ID0gTWF0aC5hYnMocmVzcG9uc2UudHpvZmZzZXQpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHttaW5pbXVtSW50ZWdlckRpZ2l0czogMiwgdXNlR3JvdXBpbmc6ZmFsc2V9KVxuICAgIHRpbWV6b25lLnRleHRDb250ZW50ID0gcmVzcG9uc2UudGltZXpvbmUgKyBgICAoVVRDIOKIkiR7b2Zmc2V0fSlgXG4gIH1cbiAgZWxzZVxuICB7XG4gICAgbGV0IG9mZnNldCA9IHJlc3BvbnNlLnR6b2Zmc2V0LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHttaW5pbXVtSW50ZWdlckRpZ2l0czogMiwgdXNlR3JvdXBpbmc6ZmFsc2V9KVxuICAgIHRpbWV6b25lLnRleHRDb250ZW50ID0gcmVzcG9uc2UudGltZXpvbmUgKyBgICAoVVRDICske29mZnNldH0pYFxuICB9XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGVzY3JpcHRpb25cbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERheSgpXG57XG4gIGNvbnN0IGRheSA9IG5ldyBEYXRlKCkuZ2V0RGF5KClcbiAgcmV0dXJuIGRheXNbZGF5XVxufVxuXG5mdW5jdGlvbiBnZXRPdGhlckRheShuZXh0KVxue1xuICBsZXQgZGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKVxuICBkYXkgPSBkYXkgKyBuZXh0XG4gIGlmIChkYXkgPiA2KVxuICB7XG4gICAgZGF5ID0gZGF5IC0gN1xuICB9XG4gIHJldHVybiBkYXlzW2RheV1cbn1cblxuXG5mdW5jdGlvbiBwYXJzZVRvZGF5V2VhdGhlckRhdGEocmVzcG9uc2UpXG57XG4gIGRhdGV0aW1lWzBdLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGF5c1swXS5kYXRldGltZVxuICBkYXlbMF0udGV4dENvbnRlbnQgPSBnZXRDdXJyZW50RGF5KCkgXG4gIHRlbXBbMF0udGV4dENvbnRlbnQgPSByZXNwb25zZS5kYXlzWzBdLnRlbXAgKyBgJHt0ZW1wVW5pdH1gXG4gIGZlZWxzbGlrZVswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0uZmVlbHNsaWtlICsgYCR7dGVtcFVuaXR9YFxuICBodW1pZGl0eVswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0uaHVtaWRpdHkgKyBcIiAlXCJcbiAgZGV3WzBdLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGF5c1swXS5kZXcgKyBgJHt0ZW1wVW5pdH1gXG4gIHdpbmRzcGVlZFswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0ud2luZHNwZWVkICsgYCR7c3BlZWRVbml0fWBcbiAgZGlyWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDIwLDIwKVxuICAgICByb3RhdGUoJHtyZXNwb25zZS5kYXlzWzBdLndpbmRkaXJ9KWApO1xuICBwcmVzc3VyZVswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0ucHJlc3N1cmUgKyBcIiBtYlwiXG4gIHZpc2liaWxpdHlbMF0udGV4dENvbnRlbnQgPSByZXNwb25zZS5kYXlzWzBdLnZpc2liaWxpdHkgKyBgJHtsb25nRGlzdGFuY2VVbml0fWBcbiAgY2xvdWRjb3ZlclswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0uY2xvdWRjb3ZlciArIFwiICUgXCJcbiAgc29sYXJyYWRpYXRpb25bMF0udGV4dENvbnRlbnQgPSByZXNwb25zZS5kYXlzWzBdLnNvbGFycmFkaWF0aW9uICsgXCIgVy9tMlwiXG4gIHNvbGFyZW5lcmd5WzBdLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGF5c1swXS5zb2xhcmVuZXJneSArIFwiIE1KL20yXCJcbiAgdXZpbmRleFswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0udXZpbmRleFxuICBzZWxlY3RXZWF0aGVySWNvbihyZXNwb25zZSwgMClcbiAgaWNvblswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0uaWNvbi5yZXBsYWNlKFwiLVwiLCBcIiBcIilcbiAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAubWFwKHdvcmQgPT4gd29yZC5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpXG4gICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICBzdW5yaXNlWzBdLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGF5c1swXS5zdW5yaXNlXG4gIHN1bnNldFswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0uc3Vuc2V0XG4gIG1vb25waGFzZVswXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbMF0ubW9vbnBoYXNlXG59XG5cbmZ1bmN0aW9uIHBhcnNlV2VhdGhlckRhaWx5RGF0YShyZXNwb25zZSlcbntcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICBkYXlOYW1lW2ktMV0udGV4dENvbnRlbnQgPSBnZXRPdGhlckRheShpKVxuICAgIHRlbXBbaV0udGV4dENvbnRlbnQgPSByZXNwb25zZS5kYXlzW2ldLnRlbXAgKyBgJHt0ZW1wVW5pdH1gXG4gICAgc2VsZWN0V2VhdGhlckljb24ocmVzcG9uc2UsIGkpXG4gICAgaWNvbltpXS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRheXNbaV0uaWNvbi5yZXBsYWNlKFwiLVwiLCBcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApXG4gICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgZmVlbHNsaWtlW2ldLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGF5c1tpXS5mZWVsc2xpa2UgKyBgJHt0ZW1wVW5pdH1gXG4gICAgd2luZHNwZWVkW2ldLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGF5c1tpXS53aW5kc3BlZWQgKyBgJHtzcGVlZFVuaXR9YFxuICAgIGRpcltpXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgyMCwyMClcbiAgICAgICByb3RhdGUoJHtyZXNwb25zZS5kYXlzW2ldLndpbmRkaXJ9KWApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gc2VsZWN0V2VhdGhlckljb24ocmVzcG9uc2UsIGluZGV4KVxue1xuICBzd2l0Y2ggKHJlc3BvbnNlLmRheXNbaW5kZXhdLmljb24pIHtcbiAgICBjYXNlIFwiY2xlYXItZGF5XCI6XG4gICAgICBpY29uSW1nW2luZGV4XS5zcmMgPSBjbGVhckRheVxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwiY2xlYXItbmlnaHRcIjpcbiAgICAgIGljb25JbWdbaW5kZXhdLnNyYyA9IGNsZWFyTmlnaHRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcImNsb3VkeVwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gY2xvdWR5XG4gICAgICBicmVha1xuICAgIGNhc2UgXCJmb2dcIjpcbiAgICAgIGljb25JbWdbaW5kZXhdLnNyYyA9IGZvZ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFwiaGFpbFwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gaGFpbFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwicGFydGx5LWNsb3VkeS1kYXlcIjpcbiAgICAgIGljb25JbWdbaW5kZXhdLnNyYyA9IHBhcnRseUNsb3VkeURheVxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwicGFydGx5LWNsb3VkeS1uaWdodFwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gcGFydGx5Q2xvdWR5TmlnaHRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInJhaW4tc25vdy1zaG93ZXJzLWRheVwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gcmFpblNub3dTaG93ZXJzRGF5XG4gICAgICBicmVha1xuICAgIGNhc2UgXCJyYWluLXNub3ctc2hvd2Vycy1uaWdodFwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gcmFpblNub3dTaG93ZXJzTmlnaHRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInJhaW4tc25vd1wiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gcmFpblNub3dcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInJhaW5cIjpcbiAgICAgIGljb25JbWdbaW5kZXhdLnNyYyA9IHJhaW5cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInNob3dlcnMtZGF5XCI6XG4gICAgICBpY29uSW1nW2luZGV4XS5zcmMgPSBzaG93ZXJzRGF5XG4gICAgICBicmVha1xuICAgIGNhc2UgXCJzaG93ZXJzLW5pZ2h0XCI6XG4gICAgICBpY29uSW1nW2luZGV4XS5zcmMgPSBzaG93ZXJzTmlnaHRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInNsZWV0XCI6XG4gICAgICBpY29uSW1nW2luZGV4XS5zcmMgPSBzbGVldFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwic25vdy1zaG93ZXJzLWRheVwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gc25vd1Nob3dlcnNEYXlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInNub3ctc2hvd2Vycy1uaWdodFwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gc25vd1Nob3dlcnNOaWdodFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwic25vd1wiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gc25vd1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFwidGh1bmRlci1yYWluXCI6XG4gICAgICBpY29uSW1nW2luZGV4XS5zcmMgPSB0aHVuZGVyUmFpblxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwidGh1bmRlci1zaG93ZXJzLWRheVwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gdGh1bmRlclNob3dlcnNEYXlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcInRodW5kZXItc2hvd2Vycy1uaWdodFwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gdGh1bmRlclNob3dlcnNOaWdodFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwidGh1bmRlclwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gdGh1bmRlclxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwid2luZFwiOlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gd2luZFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgaWNvbkltZ1tpbmRleF0uc3JjID0gXCIjXCJcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==