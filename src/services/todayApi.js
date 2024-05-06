import useConfigHeader from "../hooks/useConfig"
import api from "./api"

export async function getTodayHabits(token){
  const headers = useConfigHeader(token)
  const response = await api.get('/habits/today', headers)
  return response.data
}

export async function checkTodayHabit(token, habitId){
  const headers = useConfigHeader(token)
  await api.post(`/habits/${habitId}/check`, {}, headers)
}

export async function uncheckTodayHabit(token, habitId){
  const headers = useConfigHeader(token)
  await api.post(`/habits/${habitId}/uncheck`, {}, headers)
}