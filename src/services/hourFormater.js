const compare = (date) => {

    if (date < 10) date = `0${date}`

    return date;
}

export function hourFormater(time = {}) {
    
  let { month, day, hour, minute } = time;

  month = compare(month);
  day = compare(day);
  hour = compare(hour);
  minute = compare(minute);


  return { month, day, hour, minute };
}
