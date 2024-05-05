import {createContext, useState } from "react";

export const TodayContext = createContext({})

export default function TodayHabitsProvider({children}){

  const [todayHabits, setTodayHabits] = useState(null)
  const [finishedHabits, setFinishedHabits] = useState(null)

  return (
    <TodayContext.Provider value={{
      todayHabits, setTodayHabits, finishedHabits, setFinishedHabits
    }}>
      {children}
    </TodayContext.Provider>
  )
}