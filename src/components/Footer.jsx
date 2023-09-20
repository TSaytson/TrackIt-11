import styled from "styled-components"

export default function Footer() {
  return (
    <StyledFooter>
      <h1>Desenvolvido com amor por Mariana e Thiago</h1>
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
  animation: animateBottom;
  animation-duration: 2s;
  position: relative;
  height: 70px;
  width: 100%;
  background-color: white;
  border-top: #5987c7;
`