import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Today() {
  return (
    <>
      <Header />
      <Div>
        <h1>Você está vendo um efeito top de transição</h1>
      </Div>
      <Footer/>
    </>
  )
}

const Div = styled.div`
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
  position: relative;
  height: 500px;
  background-color: #F2F2F2;
`