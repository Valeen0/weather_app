import React from 'react';

export function CurrentTemp({ current }){

    const {icon, description, temp, temp_max, temp_min} = current;

    return( 
        <div className='current_temp'>
            <article className='flex-dr-c'>
                <div className='img-large-container'>
                    <img src={icon} alt={description} />
                </div>
                <h1> {temp.toFixed(0)}º </h1>
            </article>
            <article className='flex-dc-c'>
                <h5>{description.toUpperCase()}</h5>
                <span>{temp_min.toFixed(0)}º | {temp_max.toFixed(0)}º</span>
            </article>
        </div>
    );

}