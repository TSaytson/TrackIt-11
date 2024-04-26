import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../contexts/Auth"


export default function Header() {

  const {user} = useContext(AuthContext)
  
  return (
    <StyledHeader>
      <h1>TrackIt</h1>
      <img src={user.image}></img>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  @keyframes animateTop{
    0% {
      opacity: 0%;
      top: -50px;
    }
    100% {
      top: 0;
    }
  }
  animation: animateTop;
  animation-duration: 2s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #126BA5;
  height: 70px;
  margin-bottom: 30px;
  img {
    width: 62px;
    height: 62px;
    margin-right: 18px;
    border-radius: 50%;
  }
  h1 {
    margin-left: 18px;
    color: white;
    font-family: 'Playball';
    font-size: 38px;
  }
  
`