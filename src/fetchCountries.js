import './index.html';
import updateMarkup from "./partials/js/update-markup"

// import { alert, defaultModules } from 'node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist/PNotifyMobile.js';


const _ = require('lodash');

const refs = {
  input: document.getElementById('country'),
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

function fetchCountries(name) {
   
  const url = `https://restcountries.eu/rest/v2/name/${name}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => updateMarkup(data))
    .catch(error => console.log(error))
}

refs.input.addEventListener('input', _.debounce(() => {
  const name = refs.input.value
  if (name) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
    fetchCountries(name)
  }
}, 500))


      
     
    