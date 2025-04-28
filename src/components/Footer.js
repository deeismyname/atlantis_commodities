// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #070F2B;
  color: #F8ED8C;
  padding: 2rem;
  text-align: center;
  flex-shrink: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    p {
      font-size: 0.8rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>© 2025 Atlantis Commodities LLC. All rights reserved.</p>
        <p>Contact:  info@atlantiscommoditiesllc.com | (650) 447-9207</p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;