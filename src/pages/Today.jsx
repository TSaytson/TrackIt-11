import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/Auth";
import { Titles } from "../templates/Titles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Day } from "../utils/getDay";
import { Loader } from "../templates/Loader";

export default function Today() {
  const navigate = useNavigate();
  const { API_URL, user, setUser } = useContext(AuthContext);
  const [habits, setHabits] = useState(null);

  async function getHabits(token) {
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
      getHabits(localUser.token);
    }
  }, [])
  return (
    habits ?
    <Div>
      <Header image={user.image} />
      <Titles>
        <h1>{Day()}</h1>
        <h2>{habits.length ? `` : 'There is no habit finished yet'}</h2>
      </Titles>
      <Footer />
      </Div > : <Loader isBig={true} />
  )
}

const Div = styled.div`
  height: 99vh;
  background-color: #F2F2F2;
`