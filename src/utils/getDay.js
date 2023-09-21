import { weekDay } from "../constants/weekDays"

export const Day = () => {

  const date = new Date();
  
  return `${weekDay[date.getDay()]}, 
  ${date.getDate()}/${date.getMonth() + 1 < 10 ?
    `0${date.getMonth() + 1}` : date.getMonth() + 1}`
}