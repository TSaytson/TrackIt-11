import { weekDay } from "../constants/weekDays"

export const day = () => {

  const date = new Date();
  
  return `${weekDay[date.getDay()]}, 
  ${date.getDate()}/${date.getMonth() + 1 < 10 ?
    `0${date.getMonth() + 1}` : date.getMonth() + 1}`
}