let temp = document.createElement("p")
const container = document.querySelector('#container')
const dialogConfirmBtn = document.querySelector('#dialogConfirmBtn')
const locationValue = document.querySelector('#location')

async function WeatherApi(weatherLocation){

    try{
        const locationapiUrl = 'http://api.weatherapi.com/v1/search.json?key=e6de3e17d80243a2916234914243105&q=';
        const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json?key=e6de3e17d80243a2916234914243105&q=';
        
        
        const waetherResponse = await fetch(weatherApiUrl+weatherLocation)
        const locationResponse = await fetch(locationapiUrl+weatherLocation)

        const weatherData = await waetherResponse.json()
        const locationData = await locationResponse.json()
        
        console.log('Weather Data:',weatherData);
        console.log('Locationnnn:', locationData);
        temp = weatherData.current.temp_c;
    
        weatherLocation = weatherData.location.name;
      console.log(temp,weatherLocation);
    }catch(err){console.log('Error',err);}
}
//container.appendChild(temp)


dialogConfirmBtn.addEventListener('click',async (e)=>{
    e.preventDefault()
    const weatherLocation = locationValue.value
       
    await WeatherApi(weatherLocation)
    
     })

//async function SearchWeatherApi(location){
//
//    try{
//        
//        const locationapiUrl = 'http://api.weatherapi.com/v1/search.json?key=e6de3e17d80243a2916234914243105&q=';
//        const locationResponse = await fetch(locationapiUrl+location)
//        const SearchweatherData = await response.json()
//       
//        
//           console.log('Search Data',SearchweatherData);
//    }catch(err){console.log('Error',err);
//
//    }
//
//   
//        
//}


