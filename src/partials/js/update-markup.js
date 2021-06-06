import '../../index.html';
import countryTpl from "../../templates/countries.hbs"
import countryListTpl from "../../templates/countriesList.hbs"

const refs = {
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

function updateMarkup(data) {
  if (data.length === 1) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
    refs.countryContainer.insertAdjacentHTML('beforeend', countryTpl(data))
  }
  if (data.length <= 10 && data.length > 1) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
    refs.countryContainer.insertAdjacentHTML('beforeend', countryListTpl(data))
  }
  if(data.length > 10){
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
  
  } 
}

export default updateMarkup