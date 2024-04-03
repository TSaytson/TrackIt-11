import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/Auth";
import styled from "styled-components";
import { Loader } from "../templates/Loader";

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
    <Div>
      <Header image={user.image}/>
      <Footer linkLeft={'today'} linkRight={'habits'}/>
      </Div>
      : <Loader isBig={true}/>
  )
}

const Div = styled.div`
  height: 99vh;
  background-color: #F2F2F2;
`