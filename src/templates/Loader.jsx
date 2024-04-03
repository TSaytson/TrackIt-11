import styled from "styled-components";

export const Loader = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  animation: spin 2s linear infinite;
  position: ${props => props.isBig ? 'absolute' : ''};
  top: ${props => props.isBig ? '50%' : ''};
  left: ${props => props.isBig ? '50%' : ''};
  margin: ${props => props.isBig ? '-76px 0 0 -76px' : ''};
  border: ${props => props.isBig ? '8px' : '4px'} solid #f3f3f3;
  border-top: ${props => props.isBig ? '8px' : '4px'} solid #3498db;
  width: ${props => props.isBig ? '120px' : '18px'};
  height: ${props => props.isBig ? '120px' : '18px'};
  border-radius: 50%;

`