import { getData } from "./getData";
import keys from "./../keys.json"

const api = "https://api.openweathermap.org/data/2.5/";
const endpointW = "weather";
const endpointF = "forecast";
const defaultParams = "lang=es&units=metric";

export async function getCurrentWeather(city = ""){

    let urlWeather = `${api}${endpointW}?q=${city}&${defaultParams}&appid=${keys.private}`;
    let urlForecast = `${api}${endpointF}?q=${city}&${defaultParams}&appid=${keys.private}`;

    try{

        const currentWeather = await getData(urlWeather);
        const forecast = await getData(urlForecast);

        return { ...currentWeather, forecast};

    }catch(err){
        
        return err;

    }
        

}