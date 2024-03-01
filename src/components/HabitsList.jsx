import axios from "axios";
import { useEffect } from "react";
import { Titles } from "../templates/Titles";
import styled from "styled-components";
import { weekDay } from "../constants/weekDays";
import Swal from "sweetalert2";

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

  async function deleteHabit(id, index) {
    const headers = {
      "authorization": `Bearer ${token}`
    }
    try {
      Swal.fire({
        icon: "warning",
        title: "Deleting habit",
        text: `Do you want to delete ${habits[index].name} ?`,
        showDenyButton: true,
        toast: true,
        position: 'top',
        confirmButtonText: "Yes",
        confirmButtonColor: "green"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('should be deleting')
          axios.delete(`${API_URL}/habits/${id}`, { headers })
            .then(() => {
              getHabits(token)
              getHabits(token)
            })
            .catch(error => console.log(error))
        }
      })
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
                    onClick={() => deleteHabit(habit.id, index)}
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
  height: 100vh;
  li{
    width: 340px;
    height: 90px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
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