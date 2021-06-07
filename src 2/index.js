import './sass/main.scss';
import './tamplates/countries.hbs';
import countriesLT from './tamplates/countriesList.hbs';
// const refs = {
//     input: document.querySelector('#country'),
//     countriesList: document.querySelector('.js-countryList')
// };
// refs.input.addEventListener('input', () => {
//     const name = refs.input.value;
//     return fetchCountries(name)
// })
// function updateMarkup(data){
//     return refs.countriesList.insertAdjacentHTML('beforeend', countriesLT(data))
// }
// function fetchCountries(name) {
//     const URL = `https://restcountries.eu/rest/v2/name/${name}`
//     return fetch(URL).then(res => res.json()).then(data => updateMarkup(data)).catch(error => console.log(error))
// };

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

refs.input.addEventListener('input', () => {
  const name = refs.input.value
  if (name) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
    fetchCountries(name)
  }
})

function updateMarkup(data) {
//   if (data.length === 1) {
//     refs.countryContainer.insertAdjacentHTML('beforeend', countriesLT(data))
//   }
  refs.countryList.insertAdjacentHTML('beforeend', countriesLT(data))
}
