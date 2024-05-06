import { useState } from "react";
import { HabitForm } from "../templates/HabitForm"
import { weekDay } from "../constants/weekDays";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import Swal from "sweetalert2";
import SelectDays from "./SelectDays";
import { Loader } from "../templates/Loader";
import { useCreateHabit } from "../hooks/useCreateHabit";
import { TodayContext } from "../contexts/TodayContext";

export default function CreateHabitContainer({
  habits, setHabits, showForm, setShowForm, animation, setAnimation, handleShowForm
}) {
  const { user } = useContext(AuthContext)
  const {setTodayHabits, setFinishedHabits} = useContext(TodayContext)
  const [habitForm, setHabitForm] = useState({
    name: '',
    days: []
  })
  const [loading, setLoading] = useState(false)

  async function createHabit(e) {
    e.preventDefault();
    setLoading(true)
    if (!loading)
      try {
        const response = await useCreateHabit(
          user.token, habitForm, habits, setHabits, setTodayHabits, setFinishedHabits
        )
        Swal.fire({
          icon: "success",
          title: `Habit successfully created`,
          text: `${response.name}`,
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => setShowForm(false), 600)
        setAnimation(true)
        setHabitForm({ name: '', days: [] })
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
    setTimeout(() => setLoading(false), 600)
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
      <HabitForm onSubmit={createHabit} $show={showForm} $animation={animation} $loading={loading}>
        <div className="habitInput">
          <input
            type="text"
            name="name"
            value={habitForm.name}
            placeholder="nome do hábito"
            onChange={handleHabitForm}
            disabled={loading}
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
              list={loading}
            />
          )}
        </ul>

        <div className="controlButtons">
          <button type="button" disabled={loading} onClick={handleShowForm}>Cancelar</button>
          <button type="submit" disabled={loading}>{loading ? <Loader /> : 'Salvar'}</button>
        </div>
      </HabitForm> : ''
  )
}