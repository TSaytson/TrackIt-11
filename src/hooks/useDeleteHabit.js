import { deleteHabit } from "../services/habitsApi";
import { useTodayHabits } from "./useTodayHabits";

export async function useDeleteHabit(id, token, setTodayHabits, setFinishedHabits){
  await deleteHabit(id, token)
  await useTodayHabits(token, setTodayHabits, setFinishedHabits)
}