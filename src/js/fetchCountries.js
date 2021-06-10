function fetchCountries(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  return fetch(url)
    .then(res => res.json())
    // .then(data => updateMarkup(data))
    .catch(error => console.log(error))
};

export default fetchCountries;