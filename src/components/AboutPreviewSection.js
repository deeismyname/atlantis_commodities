import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/about-preview.jpg'; // Ensure this image exists

const AboutPreview = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2rem;
    color: #070F2B;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 70px;
      height: 4px;
      background: #1B9C85;
    }
  }

  p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.05rem;
  }
`;

const AboutImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
    order: -1;
  }
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  background: #1B9C85;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid #1B9C85;

  &:hover {
    background: transparent;
    color: #1B9C85;
  }
`;

export default function AboutPreviewSection() {
  return (
    <AboutPreview>
      <Container>
        <AboutContent>
          <h2>About Atlantis Commodities</h2>
          <p>
            Since 2010, Atlantis Commodities LLC has been a trusted global partner in premium commodity distribution. 
            We specialize in connecting quality producers with discerning buyers through our extensive network and 
            market expertise.
          </p>
          <p>
            Our commitment to ethical sourcing, quality assurance, and reliable logistics sets us apart in the industry.
          </p>
          <ReadMoreButton to="/about">Read Our Story</ReadMoreButton>
        </AboutContent>
        <AboutImage src={aboutImage} />
      </Container>
    </AboutPreview>
  );
}