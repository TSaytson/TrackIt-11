import axios from "axios";
import { useEffect, useState } from "react";
import { Titles } from "../templates/Titles";
import styled from "styled-components";
import { weekDay } from "../constants/weekDays";

export default function HabitsList({ habits, setHabits, API_URL, token }) {

  async function getHabits(token) {
    const headers = {
      "authorization": `Bearer ${token}`
    }
    try {
      const response = await axios.get(`${API_URL}/habits`, { headers });
      console.log('setou com o get habits', response.data);
      setHabits(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteHabit(id) {
    const headers = {
      "authorization": `Bearer ${token}`
    }
    try {
      const response = await axios.delete(`${API_URL}/habits/${id}`, { headers });
      getHabits(token)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('setou com o useeffect')
    console.log(habits)
    getHabits(token)
  }, [])

  return (
    habits?.length ?
      <Habits>
        {
          habits.map((habit, index) =>
            <li key={index}>
              <div>
                <main className="weekButtons">
                  <h1>{habit.name}</h1>
                  {habit.days.map((day) =>
                    <button key={day}>{weekDay[day][0]}</button>)}
                </main>
                <aside>
                  <ion-icon name="trash-outline"
                    onClick={() => deleteHabit(habit.id)}
                  />
                </aside>
              </div>
            </li>
          )
        }
      </Habits >
      :
      <Titles>
        <h2>
          Você não tem nenhum hábito cadastrado ainda.
          Adicione um hábito para começar a trackear.
        </h2>
      </Titles>
  )
}

export const Habits = styled.ul`
  li{
    width: 340px;
    height: 90px;
    background-color: white;
    border-radius: 5px;
    div{
      display: flex;
      justify-content: space-between;
    }
    ion-icon{
      margin-top: 10px;
      margin-right: 10px;
      cursor: pointer;
      font-size: 24px;
    }
    .weekButtons{
    margin-top: 10px;
    margin-left: 15px;
    font-family: 'Lexend Deca';
    button {
      width: 30px;
      height: 30px;
      margin-top: 10px;
      margin-right: 5px;
      border-radius: 5px;
      border: 1px solid #d4d4d4;
      background-color: white;
      color: #dbdbdb;
      font-size: 20px;
      font-family: 'Lexend Deca';
    }
  }
  }
`