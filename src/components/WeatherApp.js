import React, { useEffect, useState } from 'react'

const WeatherApp = () => {

    const [weather, setWeather]= useState(null);

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{

                const latitude= position.coords.latitude;
                const longitude= position.coords.longitude;


                 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=792809df66448da2ab3f693995d30295`)
                  .then((response)=>response.json())
                  .then((data) =>setWeather(data));

            })
        }
    },[])

  return (

    <>

    <div>

          {
          weather ? 
                    <div>
                        <h2>Curreent Weather</h2>
                        <p>Temperature : {weather.main.temp}</p>
                        <p>Conditons :{weather.weather[0].description} </p>
                    </div>
          :

          
            <div>
                Loading...
            </div>
          
          
        }

    </div>
    
    
    </>

  )
}

export default WeatherApp;