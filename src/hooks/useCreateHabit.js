import { saveHabit } from "../services/habitsApi";
import { useTodayHabits } from "./useTodayHabits";

export async function useCreateHabit(token, body, habits, setHabits, setTodayHabits, setFinishedHabits){
  const createdHabit = await saveHabit(token, body)
  setHabits([...habits, createdHabit])
  await useTodayHabits(token, setTodayHabits, setFinishedHabits)
  return createdHabit
}