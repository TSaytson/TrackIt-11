import styled from "styled-components"
import { Titles } from "../templates/Titles"
import SelectDays from "./SelectDays"
import { weekDay } from "../constants/weekDays"

export default function ListTodayHabits({habits}) {

  return (
    habits?.length ?
      <Habits>
        {
          habits.map((habit, index) =>
            <li key={index}>
              <div>
                <main className="weekButtons">
                  <h1>{habit.name}</h1>
                  {/* {weekDay.map((day, index) =>
                    <SelectDays
                      key={index}
                      index={index}
                      day={day}
                      days={habit.days}
                      list={true}
                    />
                  )} */}
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
      </Habits > : ''
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
  font-size: 24px;
}
.weekButtons{
  margin-top: 10px;
  margin-left: 15px;
  font-family: 'Lexend Deca';
}
}
`
