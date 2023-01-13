import React from 'react';
import { hourFormater } from '../services/hourFormater';
import { TodayData } from './TodayData';

export function TodayAditionalData({ aditional }){

    const { feels_like, humidity, speed, sunriseTime, sunsetTime } = aditional;

    return(
        <div className='today_aditional flex-dc-fs'>

            <TodayData content="humedad" src={`./assets/img/humidity.svg`} value={`${humidity.toFixed(0)}%`}/>

            <TodayData content="sensación" src={`./assets/img/thermometer.svg`} value={`${feels_like.toFixed(0)}º`}/>

            <TodayData content="viento" src={`./assets/img/wind.svg`} value={`${speed}m/s`}/>

            <TodayData 
            content="amanecer"
            src={`./assets/img/sunrise.svg`} 
            value={`${hourFormater({hour: sunriseTime.hour}).hour}:${hourFormater({minute:sunriseTime.minute}).minute} ${sunriseTime.hour < 12 ? "AM" : "PM"}`}/>

            <TodayData content="anochecer" src={`./assets/img/sunset.svg`} value={`${`${hourFormater({hour: sunsetTime.hour}).hour}:${hourFormater({minute:sunsetTime.minute}).minute} ${sunsetTime.hour < 12 ? "AM" : "PM"}`}`}/>

        </div>
    )

}