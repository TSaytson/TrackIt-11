import styled from "styled-components"


export default function Header({imageUrl}) {
  return (
    <StyledHeader>
      <h1>TrackIt</h1>
      <img src="https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg"></img>
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
  h1 {
    margin-left: 18px;
    color: white;
    font-family: 'Playball';
    font-size: 38px;
  }
  img {
    width: 51px;
    height: 51px;
    margin-right: 18px;
    border-radius: 50%;
  }
`