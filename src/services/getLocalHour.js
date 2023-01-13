import { DateTime } from "luxon";

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export function getLocalHour( ts, timezone ){

    // const secondsUTC = DateTime.utc().toSeconds();
    const reformedTimezone = timezone/60;
    const localHour = DateTime.fromSeconds(ts).setZone(reformedTimezone);
    
    const {year, month, day, hour, minute} = localHour.c;
    const dayName = days[localHour.weekday - 1];

    const monthName = months[month - 1]; 
    
    return {
        year,
        month,
        day,
        hour,
        minute,
        dayName,
        monthName
    };
}