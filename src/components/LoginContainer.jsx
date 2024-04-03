import styled from "styled-components";

export default function LoginContainer({ children }) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  @keyframes appear {
    0% {
      opacity:0%;
      top: -200px;
    }
    100% {
      top: 0;
    }
  }
  animation-name: appear;
  animation-duration: 1.5s;
  margin: 21vh auto;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  a{
    font-family: 'Lexand Deca';
    font-size: 18px;
    margin-top: 25px;
    color:#52B6FF;
    text-decoration: underline;
    transition: 0.4s all;
    :hover{
      transform: scale(1.04);
    }
  }
  h1{
    font-family: 'Playball';
    font-size:69px;
    color:#126BA5;
  }
  @media (max-width: 480px){
    a{
      font-size: 14px;
    }
  }
`