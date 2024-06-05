import {updateDOM,updateForecastDOM}  from "./dom";
import './style.css';

//let temp = document.createElement("p")

const dialogConfirmBtn = document.querySelector('#dialogConfirmBtn')
const locationValue = document.querySelector('#location')




async function WeatherApi(weatherLocation){

    try{
        const locationapiUrl = 'http://api.weatherapi.com/v1/search.json?key=e6de3e17d80243a2916234914243105&q=';
        const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json?key=e6de3e17d80243a2916234914243105&q=';
        const forecastApiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=e6de3e17d80243a2916234914243105&q=';
        let forecastDays = '&days=3';
        
        
        const waetherResponse = await fetch(weatherApiUrl+weatherLocation);
        const locationResponse = await fetch(locationapiUrl+weatherLocation);
        const forecastResponse = await fetch(forecastApiUrl+weatherLocation+forecastDays);

        const weatherData = await waetherResponse.json()
        const locationData = await locationResponse.json()
        const forecastData = await forecastResponse.json()
        
        console.log('Weather Data: ',weatherData);
        console.log('Location Data: ', locationData);
        console.log('forcast Data: ', forecastData);
       // temp = weatherData.current.temp_c;
        //container.append(temp);

       // weatherLocation = weatherData.location.name;
        //container.append(weatherLocation)
        
        
    
        updateDOM(weatherData)
        updateForecastDOM(forecastData)
        
      //console.log(temp,weatherLocation);
    }catch(err){console.log('Error: ',err);}
}
//container.appendChild(temp)


dialogConfirmBtn.addEventListener('click',async (e)=>{
    
    e.preventDefault()
    const weatherLocation = locationValue.value
            
    await WeatherApi(weatherLocation)
    
     })

export default WeatherApi


