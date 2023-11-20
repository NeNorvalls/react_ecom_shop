import styled from "styled-components";

export const PortfolioText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: bold;
  text-decoration: solid;
  letter-spacing: 2px;

  a {
    text-decoration: underline;
    font-size: 18px;
    color: darkred;
    letter-spacing: 10px;
    transition: text-decoration 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      text-decoration: double;
      background-color: gold;
      color: blue;
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;

    a {
      font-size: 20px;
      padding: 10px;
    }
  }

  @media (min-width: 992px) {
    font-size: 18px;

    a {
      font-size: 24px;
      padding: 8px;
    }
  }
`;
