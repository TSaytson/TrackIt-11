import {createContext, useState } from "react";

export const TodayHabitsContext = createContext({})

export default function TodayHabitsProvider({children}){

  const [todayHabits, setTodayHabits] = useState(null)
  const [finishedHabits, setFinishedHabits] = useState(null)

  return (
    <TodayHabitsContext.Provider value={{
      todayHabits, setTodayHabits, finishedHabits, setFinishedHabits
    }}>
      {children}
    </TodayHabitsContext.Provider>
  )
}