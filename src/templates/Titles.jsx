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
  h1{
    margin-left: 20px;
    font-size: 23px;
    font-family: 'Lexend Deca';
    color: #126BA5;
  }
  h2{
    margin-left: 20px;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: ${props => props.hasProgress ? '#8FC549' : '#BABABA'}
  }

`