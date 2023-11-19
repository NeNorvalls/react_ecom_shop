import React from 'react';
import { FooterContainer, ScrollButton, GoBackButton } from './Footer.styles';

const portfolioURL = "https://nenorvalls-portfolio.netlify.app/";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBackToPortfolio = () => {
    window.location.href = portfolioURL;
  };

  return (
    <>
     <ScrollButton onClick={handleScrollToTop}>Scroll to Top</ScrollButton>
      <GoBackButton id="goBackButton" onClick={handleGoBackToPortfolio}>
        Go back to portfolio!
      </GoBackButton>
      <FooterContainer>
        <p>&copy; 2023 NeNorvalls eCom_Shop</p>
      </FooterContainer>
    </>
  );
}

export default Footer;

