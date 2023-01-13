import React, { useState } from 'react'
import { getCurrentWeather } from '../services/getCurrentWeather';

export function Buscador({isLoading, setError, setWeather}){

    const [keyword, setKeyword] = useState("");

    const initialValues = () => {
        isLoading(true);
        setError(null);
        setWeather({});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!keyword.trim()) return;
        initialValues();        

        getCurrentWeather(keyword)
            .then(data => {

                data.error ? ( setError(data)) : setWeather(data);
                isLoading(false);
                
            });
        
        setKeyword("");
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className='fields-container'>
                
                <input 
                    onChange={ e => setKeyword(e.target.value)} 
                    type="text" 
                    name="city" 
                    placeholder='Buscar Ciudad' 
                    value={keyword} 
                />
                <button type='submit'>Buscar</button>
                
            </div>
        </form>
    );

}