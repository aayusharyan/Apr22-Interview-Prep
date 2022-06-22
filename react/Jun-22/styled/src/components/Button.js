import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    // transform: rotate(0deg);
    // transform: translateY(250px);
    transform: scale(200%);
  }
  100% {
    // transform: rotate(360deg);
    // transform: translateY(0px);
    transform: scale(0);
  }
`;

const Button = styled.button`
  background-color: orange;
  color: ${({ primaryColor }) => primaryColor || "black"};
  border: 2px solid black;
  border-radius: 0px;
  cursor: pointer;
  // animation: ${rotation} 5s linear alternate infinite;
  &:hover {
    background-color: ${props => props.primaryColor || "black"};
    color: orange;
  }
`;

export default Button