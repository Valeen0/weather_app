import React from 'react';
import "./../assets/styles/WeatherPanel.css";
import { WeatherToday } from './WeatherToday';
import { getLocalHour } from '../services/getLocalHour';
import { WeatherForecast } from './WeatherForecast';

export function WeatherPanel({ data }){

    const { forecast } = data;
    const { list } = forecast;
    const next12Hours = list.slice(0, 5);
    const next5Days = list.slice(5, 40);

    const { name, weather, wind, sys, main } = data;
    const { icon, description } = weather[0];
    const { speed } = wind
    const { feels_like, humidity, temp, temp_max, temp_min } = main;
    const { country, sunrise, sunset } = sys;

    const localHour = getLocalHour(data.dt, data.timezone);
    const sunriseTime = getLocalHour(sunrise, data.timezone);
    const sunsetTime = getLocalHour(sunset, data.timezone);

    const weatherToday = { 
        currentTemp: { 
            icon: `./assets/img/${icon}.svg`,
            description,
            temp,
            temp_max,
            temp_min
        },
        aditionalData: { speed, feels_like, humidity, sunriseTime, sunsetTime }
    };
    const localData = { name, country, localHour };

    return(
        <main className='flex-dc-c'>
            <WeatherToday 
                currentWeather={weatherToday} 
                cityLocalData={localData}
            />

            <hr/>

            <WeatherForecast
                today={localHour.day}
                type={"daily"}
                forecasts={next12Hours}
                timezone={data.timezone}
            />

            <hr/>   
            
            <WeatherForecast
                today={localHour.day}
                type={"week"}
                forecasts={next5Days}
                timezone={data.timezone}
            />


        </main>

    );


}