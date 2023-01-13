import React from 'react';
import { hourFormater } from '../services/hourFormater';

export function CityData ({ data }){

    const {name, country, localHour} = data;

    return(
        <article className='city_data'>

            <div className='city_name'>
                <h2>{name.toUpperCase()} - {country}</h2>
            </div>
            <div className='city_time flex-dr-sb'>
                <span>{localHour.dayName} {localHour.day} de {localHour.monthName}</span>
                <p>{hourFormater({hour: localHour.hour}).hour}:{hourFormater({minute:localHour.minute}).minute}</p>
            </div>

        </article>
    );

}