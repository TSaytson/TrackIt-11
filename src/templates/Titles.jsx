import styled from "styled-components";

export const Titles = styled.section`
  @keyframes animateLeft {
    0%{
      opacity: 0;
      left: -100px;
    }
    100%{
      left: 0;
    }
  }
  position: relative;
  animation: animateLeft;
  animation-duration: 2s;
  margin-bottom: 30px;
  width: 100%;
  max-width: 340px;
  ${(props) => 
  props.hasHabits && 
  `
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: #52b6ff;
    color: white;
    border-radius: 5px;
    border: none;
    width: 40px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-size: 26px;
    line-height: 0;
    cursor:pointer;
  }
  `
  }
  h1{
    font-size: 23px;
    font-family: 'Lexend Deca';
    color: #126BA5;
  }
  h2{
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: ${props => props.hasProgress ? '#8FC549' : '#BABABA'}
  }
`