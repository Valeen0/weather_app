import React from 'react';
import { getLocalHour } from '../services/getLocalHour';
import { hourFormater } from '../services/hourFormater';
import { WeatherContainer } from './WeatherContainer';

export function WeatherForecast({today, type, forecasts = [], timezone }){

    const weeklyForecast = [];

    if(type === "week"){

        const result = forecasts.filter((element)=>{
            const {day} = getLocalHour(element.dt, timezone);
            
            // No se como se me ocurrió pero funcionó 
            return (day > today && (today += 1) );
           
        });

        weeklyForecast.push(result);
    }

    return(
        <section className='next_hours'>
            <h4>{type === "daily" ? "Próximas horas" : "Próximos dias"}</h4>
            
            <div className='flex-dr-c'>
                
                {type === "daily" ? (
                    forecasts.map(({dt, main, weather})=>{

                        const {hour, minute} = getLocalHour(dt, timezone);
                        const { temp } = main;
                        const { icon, description} = weather[0];
    
                        return <WeatherContainer
                            key={dt}
                            content={`${hourFormater({hour}).hour}:${hourFormater({minute}).minute}`}
                            description={description}
                            icon={icon}
                            temp={`${temp.toFixed(0)}º`}
                        />
    
                    })
                    
                ):(
                    weeklyForecast[0].map(({dt, main, weather})=>{
                        const { dayName } = getLocalHour(dt, timezone);
                        const { temp } = main;
                        const { icon, description} = weather[0];

                        return <WeatherContainer
                            key={dt}
                            content={dayName.toUpperCase()}
                            description={description}
                            icon={icon}
                            temp={`${temp.toFixed(0)}º`}
                        />
                    })
                )
                
                }

            </div>

        </section>
    );

}