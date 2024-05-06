import { getTodayHabits } from "../services/todayApi"

export async function useTodayHabits(token, setTodayHabits, setFinishedHabits){
  const todayHabits = await getTodayHabits(token)
  setTodayHabits(todayHabits)
  setFinishedHabits(todayHabits.filter(habit => habit.done))
  return todayHabits
}