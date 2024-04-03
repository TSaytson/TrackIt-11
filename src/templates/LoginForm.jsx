import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  input{
    color: ${props => props.isLoading ? '#AFAFAF' : '#d4d4d4'} ;
    width: 420px;
    height: 45px;
    background-color:${props => props.isLoading ? '#D4D4D4' : 'white'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    font-size: 20px;
    cursor: ${props => props.isLoading ? 'not-allowed' : 'pointer'};
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 420px;
    height: 45px;
    background-color: #52B6FF;
    border-radius:5px;
    border:none;
    color:white;
    font-size: 20px;
    font-family: 'Lexend Deca';
    cursor: ${props => props.isLoading ? 'not-allowed' : 'pointer'};
    transition: 400ms all;
    filter: ${props => props.isLoading ? 'opacity(50%)' : ''};
    :hover{
      transform: scale(1.04);
      filter: ${props => props.isLoading ? '' : 'brightness(105%)'};
    }
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