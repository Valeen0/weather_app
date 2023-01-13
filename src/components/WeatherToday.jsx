import React from 'react';
import { CityData } from './CityData';
import { CurrentTemp } from './CurrentTemp';
import { TodayAditionalData } from './TodayAditionalData';

export function WeatherToday({ currentWeather, cityLocalData }){

    const { currentTemp, aditionalData } = currentWeather;

    return(
        <section className='weather_today flex-dr-c-fs'>

            <CurrentTemp current={currentTemp}/>
            <TodayAditionalData aditional={aditionalData} />
            <CityData data={cityLocalData} />

        </section>
    );

}