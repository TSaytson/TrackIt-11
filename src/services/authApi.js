import api from "./api";

export async function signIn(data){
  const response = await api.post('/auth/login', data)
  return response.data
}

export async function signUp(data){
  const response = await api.post('/auth/sign-up', data)
  return response.data
}