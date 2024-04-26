import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/Auth";
import axios from "axios";
import { Error, Toast } from "../templates/Swals";
import { TodayHabitsContext } from "../contexts/TodayHabits";

export default function TodayHabit({ habit }) {

  const { API_URL, user } = useContext(AuthContext)
  const { finishedHabits, setFinishedHabits } = useContext(TodayHabitsContext)
  const [isCompleted, setIsCompleted] = useState(null)

  async function handleCompleted(habit) {
    const headers = {
      authorization: `Bearer ${user.token}`
    }
    try {
      if (isCompleted) {
        // await axios.post(`${API_URL}/habits/${habit.id}/uncheck`, {}, { headers })
        setFinishedHabits(finishedHabits.filter(finishedHabit => finishedHabit.id !== habit.id))
      }
      else {
        // await axios.post(`${API_URL}/habits/${habit.id}/check`, {}, { headers })
        setFinishedHabits([...finishedHabits, habit])
      }
      console.log(finishedHabits)
      setIsCompleted(!isCompleted)
    } catch (error) {
      console.log(error)
      Error(error.response.data.message)
    }
  }

  useEffect(() => {
    if (habit.done) setIsCompleted(true)
    else setIsCompleted(false)
  }, [])

  return (
    <StyledTodayHabit $isCompleted={isCompleted}>
      <div>
        <main>
          <h1>{habit.name}</h1>
          <p>Sequência atual: {habit.currentSequence} dias</p>
          <p>Seu recorde: {habit.highestSequence} dias</p>
        </main>
        <aside>
          <ion-icon name="checkmark"
            onClick={() => handleCompleted(habit)}
          />
        </aside>
      </div>
    </StyledTodayHabit>
  )
}

const StyledTodayHabit = styled.div`
  div{
    display: flex;
    justify-content: space-between;
    main{
      margin-top: 10px;
      margin-left: 15px;
      font-family: 'Lexend Deca';
      h1{
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 5px;
      }
      p{
        font-size: 13px;
        line-height: 16px;
      }
    }
    aside{
      ion-icon{
        margin-top: 10px;
        margin-right: 10px;
        cursor: pointer;
        font-size: 70px;
        transition: all .3s;
        color: white;
        background-color: ${props => props.$isCompleted ? '#8FC549' : '#ebebeb'};
        border-radius: 5px;
        &:hover{
          filter: brightness(105%);
        }
      }
    }
  }
`