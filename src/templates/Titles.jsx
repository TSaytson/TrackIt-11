import styled from "styled-components";
import {appearLeft} from '../utils/keyframes'

export const Titles = styled.section`
  position: relative;
  animation: ${appearLeft} 2s;
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
    margin-bottom: 5px;
  }
  h2{
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: ${props => props.hasProgress ? '#8FC549' : '#BABABA'}
  }
`