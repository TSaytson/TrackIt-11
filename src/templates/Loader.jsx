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
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  width: 18px;
  height: 18px;
  border-radius: 50%;

`