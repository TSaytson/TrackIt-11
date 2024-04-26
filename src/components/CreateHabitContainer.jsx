import { useState } from "react";
import { HabitForm } from "../templates/HabitForm"
import { weekDay } from "../constants/weekDays";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import Swal from "sweetalert2";
import SelectDays from "./SelectDays";
import { useEffect } from "react";
import { MaximumHabitNameError, MinimumDaysError } from "../errors/HabitsErrors";

export default function CreateHabitContainer({
  getHabits, setHabits, showForm, setShowForm, animation, setAnimation, handleShowForm
}) {
  const { API_URL, user } = useContext(AuthContext)
  const [habitForm, setHabitForm] = useState({
    name: '',
    days: []
  })

  async function createHabit(e) {
    e.preventDefault();
    const headers = {
      "authorization": `Bearer ${user.token}`
    }
    try {
      if (!habitForm.days.length) throw MinimumDaysError()
      if (habitForm.name.length > 20) throw MaximumHabitNameError()

      const response = await axios.post(`${API_URL}/habits`, habitForm, { headers });

      Swal.fire({
        icon: "success",
        title: `Habit successfully created`,
        text: `${response.data.name}`,
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1500
      })
      //refactor
      getHabits(user.token)
      setTimeout(() => setShowForm(false), 600)
      setAnimation(true)
    }
    catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: `${error.response.data.details}`,
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  function handleHabitForm(e) {
    if (e.target.name === 'name')
      setHabitForm({ ...habitForm, [e.target.name]: e.target.value })
    else if (!habitForm[e.target.name].includes(e.target.id))
      habitForm[e.target.name].push(e.target.id)
    console.log(habitForm)
  }

  return (
    showForm ?
      <HabitForm onSubmit={createHabit} $show={showForm} $animation={animation}>
        <div className="habitInput">
          <input
            type="text"
            name="name"
            placeholder="nome do hábito"
            onChange={handleHabitForm}
          />
        </div>

        <ul className="weekButtons">
          {weekDay.map((day, index) =>
            <SelectDays
              key={index}
              name="days"
              index={index}
              day={day}
              days={habitForm.days}
            />
          )}
        </ul>

        <div className="controlButtons">
          <button type="button" onClick={handleShowForm}>Cancelar</button>
          <button type="submit">Salvar</button>
        </div>
      </HabitForm> : ''
  )
}