import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/Auth";
import axios from "axios";
import { Error } from "../templates/Swals";
import { TodayContext } from "../contexts/TodayContext";

export default function TodayHabit({ habit, loading, setLoading }) {

  const { API_URL, user } = useContext(AuthContext)
  const { finishedHabits, setFinishedHabits } = useContext(TodayContext)
  const [isCompleted, setIsCompleted] = useState(null)
  const [record, setRecord] = useState(false)

  async function handleCompleted(habit) {
    const headers = {
      authorization: `Bearer ${user.token}`
    }
    setLoading(true)
    try {
      if (isCompleted) {
        await axios.post(`${API_URL}/habits/${habit.id}/uncheck`, {}, { headers })
        if (habit.currentSequence === habit.highestSequence)
          habit.highestSequence--
        habit.currentSequence--
        setRecord(false)
        setFinishedHabits(finishedHabits.filter(finishedHabit => finishedHabit.id !== habit.id))
      }
      else {
        await axios.post(`${API_URL}/habits/${habit.id}/check`, {}, { headers })

        if (habit.currentSequence === habit.highestSequence){
          habit.highestSequence++
          setRecord(true)
        }
        habit.currentSequence++
        if (habit.currentSequence === habit.highestSequence)
          setRecord(true)
        setFinishedHabits([...finishedHabits, habit])
      }
      console.log(finishedHabits)
      setIsCompleted(!isCompleted)
    } catch (error) {
      console.log(error)
      Error(error.response.data.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (habit.done) setIsCompleted(true)
    else setIsCompleted(false)
    if (habit.currentSequence && habit.currentSequence === habit.highestSequence)
      setRecord(true)
  }, [])

  return (
    <StyledTodayHabit $isCompleted={isCompleted} $record={record}>
      <div>
        <main>
          <h1>{habit.name}</h1>
          <p>Sequência atual: <span className="current">{habit.currentSequence} dias</span></p>
          <p>Seu recorde: <span className="record">{habit.highestSequence} dias </span></p>
        </main>
        <aside>
          <ion-icon name="checkmark"
            onClick={() => loading ? '' : handleCompleted(habit)}
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
        .current{
          color: ${props => props.$isCompleted ? '#8fc549' : 'black'} ;
        }
        .record{
          color: ${props => props.$record ? '#8fc549' : 'black'}
        }
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