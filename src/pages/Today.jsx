import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/Auth";
import { Titles } from "../templates/Titles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { day } from "../utils/getDay";
import { Loader } from "../templates/Loader";
import ListHabits from "../components/ListHabits";
import ListTodayHabits from "../components/ListTodayHabits";
import { TodayContext } from "../contexts/TodayContext";

export default function Today() {
  const navigate = useNavigate();
  const { API_URL, user, setUser } = useContext(AuthContext);
  const {todayHabits, setTodayHabits, finishedHabits, setFinishedHabits} = useContext(TodayContext);

  async function getTodayHabits(token) {
    const headers = {
      "authorization": `Bearer ${token}`
    }
    try {
      const response = await axios.get(`${API_URL}/habits/today`, { headers });
      console.log(response.data)
      setTodayHabits(response.data)
      setFinishedHabits(response.data.filter(habit => habit.done))
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
      getTodayHabits(localUser.token);
    }
  }, [])

  return (
    todayHabits ?
      <Main>
        <Header/>
        <Titles hasProgress={finishedHabits.length}>
          <h1>{day()}</h1>
          <h2>{todayHabits.length ? finishedHabits?.length ? 
          `${((finishedHabits.length/todayHabits.length)*100).toFixed(0)}% concluido` 
            : 'There is no habit finished yet' 
            : 'No habits for today'}
            </h2>
        </Titles>
        <ListTodayHabits/>
        <Footer linkLeft={'habits'} linkRight={'historic'} />
      </Main > : <Loader isBig={true} />
  )
}

const Main = styled.main`
  height: 99vh;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
`