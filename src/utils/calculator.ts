import { priceTable } from '../data/prices';

export const formatDate = (date? : Date) : string => {
  if (!date) {
    return '';
  }

  const options : Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const formattedDate = date.toLocaleString('en-NL', options);

  return formattedDate;
}

export const calculateCosts = (consumption : number, startDate : Date, duration : number) : number => {
  const startTime = startDate;
  const endTime = new Date(startTime.getTime() + (duration * 60* 1000));
  let price = 0;

  const minutes = Math.floor((endTime.getTime() - startTime.getTime()) / (1000 * 60));
  const intervals = Math.ceil(minutes / 15);


  for (let i = 0; i < intervals; i++) {
    const intervalTime = new Date(startTime.getTime() + i * 15 * 60 * 1000);
    const nightHours = [23, 0, 1, 2, 3, 4, 5, 6];
    const dayType = (intervalTime.getDay() == 6) || (intervalTime.getDay() == 0) ? 'weekend' : 'workday';

    console.log(nightHours.includes(intervalTime.getHours()));
    console.log(intervalTime.getDay(), dayType);

    if (nightHours.includes(intervalTime.getHours())) {
      price += priceTable[dayType].night * consumption;
    } else {
      price += priceTable[dayType].day * consumption;
    }
  }

  return price;
}