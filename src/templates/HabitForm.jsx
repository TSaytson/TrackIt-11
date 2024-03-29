import styled from "styled-components";

export const HabitForm = styled.form`
  @keyframes slideDown {
    0% {
      top: -30px;
      opacity: 0%;
    }

    100% {
      top: 0;
    }
  }

  @keyframes slideUp {
    0% {
      top: 0;
    }

    100%{
      top: -50px;
      opacity: 0%;
    }
  }
  animation-name: ${props => props.$animation ? 'slideUp' : 'slideDown'};
  animation-duration: 1s;
  position: relative;
  height: 180px;
  width: 340px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 30px;
  div, ul{
    width: 90%;
    margin-left: 16px;
    button, li{
      cursor: pointer;
    }
  }
  .habitInput{
    input{
      width: 96%;
      height: 45px;
      border-radius: 5px;
      border: 1px solid #d4d4d4;
      margin-top: 20px;
      padding-left: 10px;
      ::placeholder{
        font-family: 'Lexend Deca';
        font-size: 20px;
        color: #dbdbdb;
      }
    }
  }

  .weekButtons{
    margin-top: 8px;
    display: flex;
  }

  .controlButtons{
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    button{
      font-family: 'Lexend Deca';
      height: 35px;
      width: 84px;
      font-size: 16px;
    }
    button:nth-child(1) {
      color: #52b6ff;
      background-color: white;
      border: none;
    }
    button:nth-child(2){
      border-radius: 5px;
      border: none;
      background-color: #52b6ff;
      color: white;
    }
  }
`