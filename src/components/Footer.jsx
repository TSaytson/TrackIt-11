import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
  return (
    <StyledFooter>
      <Link to='/habits'>Habits</Link>
      <Link to='/historic'>Historic</Link>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  @keyframes animateBottom {
    0% {
      bottom: -50px;
      opacity: 0;
    }
    100%{
      bottom: 0;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: animateBottom;
  animation-duration: 2s;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: white;
  border-top: 2px solid #5987c7;
  a {
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-size: 18px;
    transition: 0.4s all;
    :hover{
      filter: brightness(115%);
      transform: scale(1.05);
    }
  }
  a:nth-child(1){
    margin-left: 35px;
  }
  a:nth-child(2){
    margin-right: 35px;
  }
`