import { MaximumHabitNameError, MinimumDaysError } from "../errors/HabitsErrors";
import useConfigHeader from "../hooks/useConfig";
import api from "./api";

export async function getHabits(token){

  const headers = useConfigHeader(token)
  const response = await api.get('/habits', headers)

  return response.data
}

export async function saveHabit(token, body){
  if (!body.days.length) throw MinimumDaysError()
  if (body.name.length > 20) throw MaximumHabitNameError()

  const headers = useConfigHeader(token)
  const response = await api.post('/habits', body, headers)
  return response.data
}

export async function deleteHabit(id, token){
  const headers = useConfigHeader(token)
  await api.delete(`/habits/${id}`, headers)
}