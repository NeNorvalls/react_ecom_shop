import styled, { keyframes } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const rainbowAnimation = keyframes`
  0% {
    color: #ff0000;
  }
  20% {
    color: #ff8800;
  }
  40% {
    color: #ffff00;
  }
  60% {
    color: #00ff00;
  }
  80% {
    color: #0077ff;
  }
  100% {
    color: #ff00ff;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    animation: ${rainbowAnimation} 2s linear infinite;
  }
`;

export const CartNavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: 700;
  }

  span {
    margin-left: 0.5rem;
  }
`;

export const ShoppingCartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;
`;
