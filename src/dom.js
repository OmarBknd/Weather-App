//import WeatherApi from "./index.js";


const container = document.querySelector('#container')
function updateDOM(weatherData) {
   
    container.innerHTML = '';

   

    const currentLocationCard = document.createElement('div');
    currentLocationCard.classList.add('current-location-card');
    container.appendChild(currentLocationCard);

    const locationElement = document.createElement('p');
    locationElement.textContent = ` ${weatherData.location.name} `;
    currentLocationCard.appendChild(locationElement);

    const regionElement = document.createElement('p');
    regionElement.textContent = ', ' + ` ${weatherData.location.region} `;
    currentLocationCard.appendChild(regionElement);

    const countryElement = document.createElement('p');
    countryElement.textContent = ', ' + ` ${weatherData.location.country}`;
    currentLocationCard.appendChild(countryElement);

    const currentTempCard = document.createElement('div');
    currentTempCard.classList.add('current-temp-card');
    container.appendChild(currentTempCard);

    const imgElementContainer = document.createElement('div')
    imgElementContainer.classList.add('icon-condition')
    const imgElement = document.createElement('img')
    imgElement.src = weatherData.current.condition.icon;
    imgElementContainer.appendChild(imgElement)
    

   

    const condElement = document.createElement('span');
    condElement.textContent = ` ${weatherData.current.condition.text}`;
   // currentTempCard.appendChild(condElement);
    imgElementContainer.appendChild(condElement)
    currentTempCard.appendChild(imgElementContainer);

    const tempElement = document.createElement('div');
    tempElement.classList.add('temp-degree')
    tempElement.textContent = `${weatherData.current.temp_c}°C`;
    currentTempCard.appendChild(tempElement);

    
}

export function updateForecastDOM(forecastData){
    const days = forecastData.forecast.forecastday
    
    days.forEach(day => {
        const dayDate= document.createElement('div')
        container.appendChild(dayDate);
        dayDate.textContent = day.date
        
        const hoursOfTheDay = day.hour
        hoursOfTheDay.forEach(hour =>{
            const hourInDay =  document.createElement('div');
            container.appendChild(hourInDay);
            hourInDay.textContent = `${hour.temp_c}°C `
        })
    });
    
}
export default updateDOM

//for(let i=0; i<forecastData.forecast.forecastday.length;i++){ 
//    const days = document.createElement('div')
//     days.textContent = ` ${forecastData.forecast.forecastday[i].date}` 
//      
//    container.appendChild(days)
//    }