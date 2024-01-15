import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/Auth";
import styled from "styled-components";
import { Loader } from "../templates/Loader";
import axios from "axios";
import { Titles } from "../templates/Titles";
import HabitContainer from "../components/HabitContainer";
import HabitsList from "../components/HabitsList";

export default function Habits() {
  const { API_URL, user, setUser } = useContext(AuthContext)
  const [habits, setHabits] = useState(null)
  const [showForm, setShowForm] = useState(false)

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

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!user && !localUser)
      navigate('/')
    else {
      setUser(localUser);
    }
  }, [])

  return (
    user ?
      <Main>
        <Header image={user.image} />
        <Titles isHabits={true}>
          <h1>Meus hábitos</h1>
          <button onClick={() => setShowForm(true)}>+</button>
        </Titles>
        {showForm ?
          <HabitContainer
            token={user.token}
            setShowForm={setShowForm}
            getHabits={getHabits}
            setHabits={setHabits}
          /> : ''}
        <HabitsList token={user.token}
          API_URL={API_URL}
          habits={habits}
          setHabits={setHabits} />
          
        <Footer linkLeft={'today'} linkRight={'historic'} />
      </Main>
      : <Loader isBig={true} />
  )
}

const Main = styled.main`
  height: 99vh;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
`