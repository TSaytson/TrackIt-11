import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
export const appearLeft = keyframes`
  0%{
    opacity: 0;
    left: -100px;
  }
  100%{
    left: 0;
  }
`
export const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`
export const slideDown = keyframes`
  0% {
    top: -30px;
    opacity: 0%;
  }
  100% {
    top: 0;
  }
`
export const slideUp = keyframes`
  0% {
    top: 0;
  }
  100%{
    top: -50px;
    opacity: 0;
  }
`