import '../index.html';
import createMurkup from '../index.js'

const _ = require('lodash');

const refs = {
  input: document.getElementById('country'),
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

function sameMarkupUpdate() {
  refs.countryList.innerHTML = "";
  refs.countryContainer.innerHTML = "";
}

refs.input.addEventListener('input', _.debounce(() => {
  const name = refs.input.value
  if (name) {
    sameMarkupUpdate()
    createMurkup(name)
  }
  if (refs.input.value < 1) {
    sameMarkupUpdate()
  }
}, 500));


      
     
    