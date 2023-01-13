import React from 'react';

export function TodayData({ src, content, value }){

    return(
        <article className='today-data flex-dr-fs'>
            <div className='img-icon-container'>
                <img src={src} alt={content}/>
            </div>
            <p>{content} <strong>{value}</strong> </p>
        </article>
    );

}