// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/lgf.svg'; // Import your logo image

const HeaderWrapper = styled.header`
  background-color: #070F2B;
  padding: 1rem 2rem;
  color: #F8ED8C;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px; // Adjust based on your logo's aspect ratio
  width: auto;
  
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #F8ED8C;
    text-decoration: none;
    margin-left: 2rem;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #1B9C85;
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #070F2B;
    padding: 1rem;
    a {
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #F8ED8C;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Nav>
        <LogoLink to="/" onClick={() => setIsOpen(false)}>
          <LogoImage src={logo} alt="Atlantis Commodities Logo" />
        </LogoLink>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>☰</Hamburger>
        <NavItems isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        </NavItems>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;