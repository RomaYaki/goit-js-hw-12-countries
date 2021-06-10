import './sass/main.scss';
import './js/listenConfig';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/update-markup'

function createMurkup(name) {
    return fetchCountries(name)
    .then(data => updateMarkup(data))
};

export default createMurkup;
