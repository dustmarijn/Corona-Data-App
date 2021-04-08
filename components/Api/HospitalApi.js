export default (Callback) => fetch('https://data.rivm.nl/covid-19/COVID-19_aantallen_gemeente_per_dag.json')
    .then((response) => response.json())
    .then(Callback)
    .catch((error) => console.error(error));