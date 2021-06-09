import '../index.html';
import fetchCountries from './fetchCountries'

const _ = require('lodash');

const refs = {
  input: document.getElementById('country'),
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

refs.input.addEventListener('input', _.debounce(() => {
  const name = refs.input.value
  if (name) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
    fetchCountries(name)
  }
  if (refs.input.value < 1) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
  }
}, 500));


      
     
    