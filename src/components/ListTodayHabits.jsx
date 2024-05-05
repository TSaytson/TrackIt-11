import styled from "styled-components"
import { Titles } from "../templates/Titles"
import SelectDays from "./SelectDays"
import { weekDay } from "../constants/weekDays"
import { useState } from "react"
import { useEffect } from "react"
import TodayHabit from "./TodayHabit"
import { fadeIn } from "../utils/keyframes"
import { useContext } from "react"
import { TodayContext } from "../contexts/TodayContext"

export default function ListTodayHabits() {

  const [loading, setLoading] = useState(false)
  const {todayHabits} = useContext(TodayContext)
  
  return (
    todayHabits?.length ?
      <Habits>
        {
          todayHabits.map((habit, index) =>
            <li key={index}>
              <TodayHabit habit={habit}
              loading={loading}
              setLoading={setLoading}
              />
            </li>
          )
        }
      </Habits > : ''
  )
}

export const Habits = styled.ul`
  animation: ${fadeIn} 3s;
  margin-bottom: 120px;
  li{
    width: 340px;
    height: 90px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`
