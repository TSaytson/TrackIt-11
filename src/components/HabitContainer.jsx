import { useState } from "react";
import { HabitForm } from "../templates/HabitForm"
import { weekDay } from "../constants/weekDays";

export default function HabitContainer({ setShowForm, token }) {
  const [habitForm, setHabitForm] = useState({
    name: '',
    days: []
  })
  
  async function createHabit(e) {
    e.preventDefault();
    console.log(token)
    const headers = {
      "authorization": `Bearer ${token}`
    }
    // try {
    //   const response = await axios.post(`${API_URL}/habits`, {}, { headers });
    //   setHabits(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  function handleHabitForm(e) {
    console.log(e.target)
    console.log({ ...habitForm, [e.target.name]: e.target.id })
  }
  
  return (
    <HabitForm onSubmit={createHabit}>
      <div className="habitInput">
        <input
          type="text"
          name="name"
          placeholder="nome do hábito"
          onChange={handleHabitForm}
        />
      </div>
      <div className="weekButtons">
        {weekDay.map((day, index) =>
          <button type="button"
            id={index}
            onClick={handleHabitForm}
            name="days">
            {day[0]}
          </button>
        )}
      </div>
      <div className="controlButtons">
        <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
        <button type="submit">Salvar</button>
      </div>
    </HabitForm>
  )
}