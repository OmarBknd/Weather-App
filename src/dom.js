//import WeatherApi from "./index.js";

const container = document.querySelector('#container')
function updateDOM(weatherData) {
   
    container.innerHTML = '';

    
    const regionElement = document.createElement('p');
    regionElement.textContent = `Region: ${weatherData.location.region}`;
    container.appendChild(regionElement);

    const locationElement = document.createElement('p');
    locationElement.textContent = `Location: ${weatherData.location.name}`;
    container.appendChild(locationElement);

   
    const tempElement = document.createElement('p');
    tempElement.textContent = `Temperature: ${weatherData.current.temp_c}°C`;
    container.appendChild(tempElement);
}

export default updateDOM