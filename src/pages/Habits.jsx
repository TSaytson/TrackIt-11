import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/Auth";
import styled from "styled-components";
import { Loader } from "../templates/Loader";
import axios from "axios";
import { Titles } from "../templates/Titles";
import CreateHabit from "../components/CreateHabitContainer";
import ListHabits from "../components/ListHabits";
import { useNavigate } from "react-router-dom";
import { TodayContext } from "../contexts/TodayContext";
import { getHabits } from "../services/habitsApi";

export default function Habits() {
  const { user, setUser } = useContext(AuthContext)
  const [habits, setHabits] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [animation, setAnimation] = useState(false)
  const navigate = useNavigate()

  async function fetchHabits(token) {
    try {
      const response = await getHabits(token)
      setHabits(response);
    } catch (error) {
      console.log(error);
    }
  }

  function handleShowForm() {
    if (showForm) {
      setTimeout(() => setShowForm(false), 600)
      setAnimation(true)
    }
    else {
      setShowForm(true)
      setAnimation(false)
    }
  }

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!user && !localUser)
      navigate('/')
    else {
      setUser(localUser)
      fetchHabits(localUser.token)
    }
  }, [])

  return (
    user ?
      <Main>
        <Header/>
        <Titles hasHabits={true}>
          <h1>Meus hábitos</h1>
          <button onClick={handleShowForm}>+</button>
        </Titles>
        <CreateHabit
          showForm={showForm}
          setShowForm={setShowForm}
          animation={animation}
          setAnimation={setAnimation}
          handleShowForm={handleShowForm}
          habits={habits}
          setHabits={setHabits}
        />
        <ListHabits
          habits={habits}
          setHabits={setHabits} />

        <Footer linkLeft={'today'} linkRight={'historic'} />
      </Main>
      : <Loader isBig={true} />

  )
}

const Main = styled.main`
  min-height: 100vh;
  height: 100%;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
`