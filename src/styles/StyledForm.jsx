import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  input{
    color: #d4d4d4;
    width: 420px;
    height: 45px;
    background-color: white;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    ::placeholder{
        font-size: 20px;
        font-family: 'Lexend Deca';
        color:#DBDBDB;
    }
    :hover{
      ::placeholder{
        transition: 1s all;
        font-size: 14px;
        filter: opacity(50%)
      }
    }
  }
  button{
    width: 420px;
    height: 45px;
    background-color: #52B6FF;
    border-radius:5px;
    border:none;
    color:white;
    font-size: 20px;
    font-family: 'Lexend Deca';
    cursor: pointer;
    :hover{
      transform: scale(1.04);
      filter: brightness(105%)
    }
    transition: 0.4s;
  }
  @media (max-width: 480px){
    input{
      width: 80vw;
    }
    button{
      width: 80vw;
    }
  }
`