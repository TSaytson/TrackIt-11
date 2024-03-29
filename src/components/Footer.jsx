import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

export default function Footer() {
  return (
    <StyledFooter>
      <Link to='/habits'>Hábitos</Link>
      <Link to='/today'>
        <div>
          <CircularProgressbar value={66} text="Hoje"
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: '#fff',
              textColor: '#fff',
              trailColor: '#52b6ff',
          })}/>
        </div>
      </Link>
      <Link to='/historic'>Histórico</Link>
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
  justify-content: space-around;
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
    div{
      width: 91px;
      height: 91px;
      border-radius: 50%;
      background-color: #52B6FF;
      border: 6px solid #52B6FF;
      margin-bottom: 60px;
    }
    :hover{
      filter: brightness(115%);
      transform: scale(1.05);
    }
  }
`