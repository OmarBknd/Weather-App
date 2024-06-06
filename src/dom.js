
import {format} from 'date-fns';
import sunrise from './assets/svg/sunrise.svg';
import sunset from './assets/svg/sunset.svg';
import wind from './assets/svg/wind.svg';
import humidity from './assets/svg/humidity.svg'

const container = document.querySelector('#container')


//let Celsius = true
function updateDOM(weatherData) {
   
    container.innerHTML = '';

   
   
   

const currentLocationCard = document.createElement('div');
const imgElementContainer = document.createElement('div');
const locationElement = document.createElement('div');
const locationTimeElement = document.createElement('div');
const currentTempCard = document.createElement('div');
const condElement = document.createElement('span');
const tempContainer = document.createElement('div');
const tempElement = document.createElement('div');
const tempFeelLikeElement = document.createElement('div');
const imgElement = document.createElement('img');

imgElementContainer.classList.add('icon-condition');
currentTempCard.classList.add('current-day-forecast-card');
currentLocationCard.classList.add('location-card');
tempContainer.classList.add('temp-container');
tempElement.classList.add('temp-degree');
tempFeelLikeElement.classList.add('temp-feel-like');
locationElement.classList.add('location-text');
locationTimeElement.classList.add('location-time');
condElement.classList.add('condition-text');

locationElement.textContent = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
currentLocationCard.appendChild(locationElement);
container.appendChild(currentLocationCard);

locationTimeElement.textContent = format(new Date(weatherData.location.localtime), 'EEEE, MMMM d, yyyy HH:mm');
currentTempCard.appendChild(locationTimeElement);
container.appendChild(currentTempCard);

imgElement.src = weatherData.current.condition.icon;
imgElementContainer.appendChild(imgElement);
condElement.textContent = `${weatherData.current.condition.text}`;
imgElementContainer.appendChild(condElement);
currentTempCard.appendChild(imgElementContainer);

tempElement.textContent = `${weatherData.current.temp_c}°C`;
tempFeelLikeElement.textContent = `Feels like\n${weatherData.current.feelslike_c}°C`;
tempContainer.appendChild(tempElement);
tempContainer.appendChild(tempFeelLikeElement);
currentTempCard.appendChild(tempContainer);

container.appendChild(currentTempCard);

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
  

    
}

function updateAstronomyDom(astronomyData,weatherData){

    const sunriseIcon = new Image();
    const sunsetIcon = new Image();
    const windIcon = new Image();
    const humidtyIcon = new Image();

    sunriseIcon.src = sunrise;
    sunsetIcon.src = sunset;
    windIcon.src = wind;
    humidtyIcon.src =humidity;

    const astroContainer = document.createElement('div');
    astroContainer.classList.add('astro-container');
    
    const astroCard = document.createElement('div');
    astroCard.classList.add('astro-card');
    //Front side

    const astroCardFront = document.createElement('div');
    astroCardFront.classList.add('astro-card-front');

    const sunriseText = document.createElement('span');
    sunriseText.classList.add('astro-text');
    const sunsetText = document.createElement('span');
    sunsetText.classList.add('astro-text');

   

    sunriseText.textContent = astronomyData.astronomy.astro.sunrise;
    sunsetText.textContent =astronomyData.astronomy.astro.sunset;

    sunriseText.appendChild(sunriseIcon);
    sunsetText.appendChild(sunsetIcon);

    astroCardFront.appendChild(sunriseText);
    astroCardFront.appendChild(sunsetText);
   
    //Back side

    const astroCardBack = document.createElement('div');
    astroCardBack.classList.add('astro-card-back');

    const humidityText = document.createElement('span');
    const windText = document.createElement('span');

    humidityText.textContent = `${weatherData.current.humidity}\n%`;
    humidityText.classList.add('astro-text');
    windText.textContent  = `${weatherData.current.wind_kph}\nKm/h`;
    windText.classList.add('astro-text');

    humidityText.appendChild(humidtyIcon);
    windText.appendChild(windIcon);

    astroCardBack.appendChild(humidityText);
    astroCardBack.appendChild(windText);

    astroCard.appendChild(astroCardFront);
    astroCard.appendChild(astroCardBack);

    astroContainer.appendChild(astroCard);

    container.appendChild(astroContainer)
   
}


 function updateForecastDOM(forecastData){
    const days = forecastData.forecast.forecastday
    const dailyForecastContainer = document.createElement('div');
    dailyForecastContainer.classList.add('day-forecast-container');
    days.forEach(day => {
        
        
        const dailyForecast= document.createElement('div');
        const dailyForecastImg = document.createElement('img');
        const dailyForecastText = document.createElement('span');
        const dailyForecastTemp = document.createElement('span');

        dailyForecast.classList.add('day-forecast-card');
        
        dailyForecastContainer.appendChild(dailyForecast);
        
        container.appendChild(dailyForecastContainer);
        dailyForecastImg.src =day.day.condition.icon;
        dailyForecastText.textContent = day.day.condition.text;
        dailyForecastTemp.textContent = `${day.day.avgtemp_c}°C`
       
        dailyForecast.textContent = format(new Date(day.date),'EE, MMMM d, yyyy')
        dailyForecast.appendChild(dailyForecastImg);
        dailyForecast.appendChild(dailyForecastText);
        dailyForecast.appendChild(dailyForecastTemp);
        
        //Hourly Forecast

       // const hours = day.hour;
        
       const hoursToShow = [6, 9, 12, 15, 18]; 
       const hours = day.hour.filter(hour => hoursToShow.includes(new Date(hour.time).getHours()));

hours.forEach(hour => {
    const hourlyForecastCard = document.createElement('div');
    hourlyForecastCard.classList.add('hourly-forecast-card');

    const hourlyForecast = document.createElement('li');
    hourlyForecast.classList.add('hourly-forecast');

    const hourlyForecastImg = document.createElement('img');
    hourlyForecastImg.src = hour.condition.icon; 

    const timeTemp = document.createElement('span');
    timeTemp.textContent = `${format(new Date(hour.time), 'h a')} ${hour.temp_c}°C`;

    hourlyForecast.appendChild(timeTemp);
    hourlyForecast.appendChild(hourlyForecastImg);
    hourlyForecastCard.appendChild(hourlyForecast);
    dailyForecast.appendChild(hourlyForecastCard);

    dailyForecast.addEventListener('click', () => {
        hourlyForecastCard.classList.toggle('hourly-forecast-card-active');
    });
});

       

    });
    
}
export  {updateDOM,updateForecastDOM,updateAstronomyDom}

//const hoursOfTheDay = day.hour
//        hoursOfTheDay.forEach((hour) =>//{

//            const forecastHourInDay =  document.createElement('li');
//            forecastHourInDay.classList.add('day-forecast-list-card')
//            
//            const currentHourForecastImg = document.createElement('img');
//            const currentHourForecast = document.createElement('div')
//            
//            
//            currentHourForecast.textContent = `${format(new Date(hour.time),'EE,h a')} ${hour.temp_c}°C `
//            currentHourForecastImg.src =hour.condition.icon
//           
//            forecastHourInDay.appendChild(currentHourForecastImg);
//            forecastHourInDay.appendChild(currentHourForecast)
//            hourForcast.appendChild(forecastHourInDay);
//           
//            dayForecast.addEventListener('click',()=>{
//                forecastHourInDay.classList.toggle('day-forecast-card-active')
//               
//    
//            })
//        })