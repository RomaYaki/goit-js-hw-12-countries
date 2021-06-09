import '../index.html';
import countryTpl from "../templates/countries.hbs"
import countryListTpl from "../templates/countriesList.hbs"
import { alert, defaultModules, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

const stackBottomModal = new Stack({
  dir1: "up", // With a dir1 of "up", the stacks will start appearing at the bottom.
  firstpos1: 25, // The notices will appear 25 pixels from the bottom of the context.
  push: "top", // Each new notice will appear at the bottom of the screen, which is where the "top" of the stack is. Other notices will be pushed up.
  modal: true, // When a notice appears in this stack, a modal overlay will be created.
  overlayClose: true, // When the user clicks on the overlay, all notices in this stack will be closed.
 
});

function sameMarkupUp() {
  stackBottomModal.close();
  refs.countryList.innerHTML = "";
  refs.countryContainer.innerHTML = "";
}

function updateMarkup(data) {
  if (data.length === 1) {
    sameMarkupUp();
    refs.countryContainer.insertAdjacentHTML('beforeend', countryTpl(data));
  }
  if (data.length <= 10 && data.length > 1) {
    sameMarkupUp();
    refs.countryContainer.insertAdjacentHTML('beforeend', countryListTpl(data));
  }
  if (data.length > 10) {
    sameMarkupUp();
    alert({
      text: 'Слишком много совпадений! Уточните запрос',
      type: 'info',
      stack: stackBottomModal
    });
  } 
  if (data.status === 404) {
    stackBottomModal.close();
    alert({
    text: 'Нет совпадений!',
    type: 'error',
    stack: stackBottomModal
  });
  }
}

export default updateMarkup