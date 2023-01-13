import React, { useState } from 'react';
import './assets/styles/App.css'

import { Buscador } from './components/Buscador'
import { Exception } from './components/Exception';
import { Loader } from './components/Loader';
import { WeatherPanel } from './components/WeatherPanel';

function App() {
  const [ weather, setWeather ] = useState(null);
  const [ error , setError ] = useState(null);
  const [ loading, isLoading ] = useState(false);

  return (
      <div className={`App day`}>
        <Buscador
          isLoading={isLoading}
          setError={setError}
          setWeather={setWeather}
        />

        {loading ? (
          <Loader />
        ) : error ? (
          error.statusCode === 404 ? (
            <Exception code={404} msg="ciudad no encontrada" />
          ) : (
            <Exception code={statusCode} />
          )
        ) : (
          weather && <WeatherPanel data={weather}/>
        )}
    </div>
  );
}

export default App
