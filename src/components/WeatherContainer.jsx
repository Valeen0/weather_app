import React from 'react';

export function WeatherContainer({ content, temp, icon, description }){
    return(
        <div className="weather_container">
            <h4>{content}</h4>

            <div className="img-normal-container">
                <img src={`./assets/img/${icon}.svg`} alt={description} />
            </div>

            <h3>{temp}</h3>
        </div>
    )
}