import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/Auth";
import styled from "styled-components";
import { Loader } from "../templates/Loader";
import { Titles } from "../templates/Titles";

export default function Historic() {
  const { API_URL, user, setUser } = useContext(AuthContext)

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
          <h1>Historic</h1>
          <h2>Em breve você poderá ver o histórico dos seus hábitos aqui</h2>
        </Titles>
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