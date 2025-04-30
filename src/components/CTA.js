import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animation for the floating effect
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Animation for the gradient background
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const CTAContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #070F2B 0%, #1B9C85 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 8s ease infinite;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  margin: 4rem 0;
  box-shadow: 0 10px 30px rgba(7, 15, 43, 0.3);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CTATitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #070F2B;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255,255,255,0.3), transparent);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: transparent;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    
    &::after {
      transform: translateY(0);
    }
  }
`;

const CTADecoration = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  
  &:nth-child(1) {
    top: -30px;
    left: -30px;
    width: 120px;
    height: 120px;
  }
  
  &:nth-child(2) {
    bottom: -40px;
    right: -20px;
    width: 150px;
    height: 150px;
  }
  
  &:nth-child(3) {
    top: 50%;
    right: 50px;
    width: 60px;
    height: 60px;
  }
`;

const CTA = ({ title, text, buttonText }) => {
  return (
    <CTAContainer>
      <CTADecoration />
      <CTADecoration />
      <CTADecoration />
      <CTAContent>
        <CTATitle>{title || "Ready to Get Started?"}</CTATitle>
        <CTAText>
          {text || "Contact our team today to discuss your requirements and get a personalized quote."}
        </CTAText>
        <CTAButton to="/contact">
          {buttonText || "Contact Us Now"}
        </CTAButton>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTA;