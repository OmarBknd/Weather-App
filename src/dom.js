
import {format} from 'date-fns'

const container = document.querySelector('#container')


let Celsius = true
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
   
    imgElementContainer.appendChild(condElement)
    currentTempCard.appendChild(imgElementContainer);

   
    

    const tempElement = document.createElement('div');
    tempElement.classList.add('temp-degree')
    
    

   
    tempElement.textContent = `${weatherData.current.temp_c}°C`;

   // const degreeConverter = document.createElement('button') 
   // degreeConverter.textContent ='convert'
   // degreeConverter.addEventListener('click',()=>{
   //     if(Celsius){
   //     tempElement.textContent = `${weatherData.current.temp_c}°C`;
   //      }
   //      else{
   //         tempElement.textContent = `${weatherData.current.temp_f}°F`;
   //      }
   //      Celsius = !Celsius
   // })
   // currentTempCard.appendChild(degreeConverter)
    currentTempCard.appendChild(tempElement);

    
}



 function updateForecastDOM(forecastData){
    const days = forecastData.forecast.forecastday
    const dayForecastContainer = document.createElement('div');
    dayForecastContainer.classList.add('day-forecast-card')
    days.forEach(day => {
        
        
        const dayForecast= document.createElement('div')
       
        dayForecastContainer.appendChild(dayForecast)
        container.appendChild(dayForecastContainer);
        dayForecast.textContent = format(new Date(day.date),'EEEE, MMMM d, yyyy')
        
        const hoursOfTheDay = day.hour
        hoursOfTheDay.forEach(hour =>{

            const forecastHourInDay =  document.createElement('li');
            forecastHourInDay.classList.add('day-forecast-list-card')
            
            const currentHourForecastImg = document.createElement('img');
            const currentHourForecast = document.createElement('div')
            
            
            currentHourForecast.textContent = `${format(new Date(hour.time),'EE,h a')} ${hour.temp_c}°C `
            currentHourForecastImg.src =hour.condition.icon
           
            forecastHourInDay.appendChild(currentHourForecastImg);
            forecastHourInDay.appendChild(currentHourForecast)
            dayForecast.appendChild(forecastHourInDay);
           
            dayForecast.addEventListener('click',()=>{
                forecastHourInDay.classList.toggle('day-forecast-card-active')
               
    
            })
        })
       
    });
    
}
export  {updateDOM,updateForecastDOM}

