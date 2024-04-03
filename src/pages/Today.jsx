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

export default function Today() {
  const navigate = useNavigate();
  const { API_URL, user, setUser } = useContext(AuthContext);
  const [habits, setHabits] = useState(null);
  const [finishedHabits, setFinishedHabits] = useState([])

  async function getTodayHabits(token) {
    const headers = {
      "authorization": `Bearer ${token}`
    }
    try {
      const response = await axios.get(`${API_URL}/habits/today`, { headers });
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
      getTodayHabits(localUser.token);
      console.log('console do useEffect', habits)
      if (habits) {
        setFinishedHabits(habits.filter(habit => habit.done))
      }
    }
  }, [])
  return (
    habits ?
      <Div>
        <Header image={user.image} />
        <Titles>
          <h1>{day()}</h1>
          <h2>{finishedHabits.length ? `` : 'There is no habit finished yet'}</h2>
        </Titles>
        <ListTodayHabits
          habits={habits}
        />
        <Footer linkLeft={'habits'} linkRight={'historic'} />
      </Div > : <Loader isBig={true} />
  )
}

const Div = styled.div`
  height: 99vh;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
`