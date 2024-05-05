import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/Auth";
import styled from "styled-components";
import { Loader } from "../templates/Loader";
import { Titles } from "../templates/Titles";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function Historic() {
  const { API_URL, user, setUser } = useContext(AuthContext)
  const [value, onChange] = useState(new Date())

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
        <Titles>
          <h1>Histórico</h1>
        </Titles>
        <Calendar 
        onChange={onChange} 
        value={value}
        />
        <Footer linkLeft={'today'} linkRight={'habits'} />
      </Main>
      : <Loader isBig={true} />
  )
}

const Main = styled.div`
  height: 99vh;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
`