import axios from "axios";
import { useEffect } from "react";
import { Titles } from "../templates/Titles";
import styled from "styled-components";
import { weekDay } from "../constants/weekDays";
import SelectDays from "./SelectDays";
import { Error, Toast } from "../templates/Swals";

export default function ListHabits({ habits, setHabits, token }) {

  async function deleteHabit(id, habitIndex) {
    const headers = {
      "authorization": `Bearer ${token}`
    }
    try {
      const result = await Toast.fire({
        icon: "question",
        title: "Deleting habit",
        text: `Do you want to delete ${habits[habitIndex].name} ?`,
        showDenyButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "green",
      })
      if (result.isConfirmed) {
        // await axios.delete(`${API_URL}/habits/${id}`, { headers })
        Toast.fire({
          icon: "warning",
          title: "Deleted",
          text: `${habits[habitIndex].name} was deleted`,
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false
        })
        setHabits(habits.filter((habit) => habit.id != id))
      } else {
        Toast.fire({
          icon: "info",
          title: "Canceled",
          text: `${habits[index].name} was not deleted`,
          timer: 1500,
          showConfirmButton: false
        })
      }
    } catch (error) {
      Error()
      console.log(error)
    }
  }

  return (
    habits?.length ?
      <Habits>
        {
          habits.map((habit, habitIndex) => 
            <li key={habitIndex}>
              <div>
                <main className="weekButtons">
                  <h1>{habit.name}</h1>
                  {weekDay.map((day, index) =>
                    <SelectDays
                      key={index}
                      index={index}
                      day={day}
                      days={habit.days}
                      list={true}
                      habit={habit}
                    />
                  )}
                </main>
                <aside>
                  <ion-icon name="trash-outline"
                    onClick={() => deleteHabit(habit.id, habitIndex)}
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
  margin-bottom: 120px;
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
      font-size: 21px;
    }
    .weekButtons{
      margin-top: 15px;
      margin-left: 15px;
      font-family: 'Lexend Deca';
      h1{
        margin-bottom: 5px;
      }
    }
  }
`