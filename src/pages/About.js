import React from 'react';
import styled, { keyframes } from 'styled-components';
import aboutHero from '../assets/about-hero.webp';
import teamImage from '../assets/team.webp';
import { FaAward } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { FaBalanceScale } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import CTA from '../components/CTA';
// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Main Container
const AboutContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  overflow-x: hidden;
`;

// Shared Components
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: ${props => props.color || '#070F2B'};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #1B9C85;
    margin: 1rem auto 0;
  }
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  min-height: 600px;
  background: linear-gradient(rgba(7, 15, 43, 0.7), rgba(7, 15, 43, 0.5)), 
              url(${aboutHero}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
  
  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

// Company Overview Section
const CompanySection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const CompanyContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CompanyText = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #070F2B;
    margin-bottom: 1.5rem;
  }

  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const CompanyHighlights = styled.ul`
  margin-top: 2rem;
  list-style-type: none;
`;

const HighlightItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;
  color: #555;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #1B9C85;
    font-weight: bold;
  }
`;

const CompanyImage = styled.div`
  background: url(${teamImage}) no-repeat center center;
  background-size: cover;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
    order: -1;
  }
`;

// Timeline Section
const StorySection = styled.section`
  padding: 6rem 2rem;
  background: #f9f9f9;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    background: #1B9C85;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 3rem;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0 !important;
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const TimelineYear = styled.h3`
  color: #1B9C85;
  margin-bottom: 0.5rem;
`;

// Values Section
const ValuesSection = styled.section`
  padding: 6rem 2rem;
  background: #070F2B;
  color: white;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ValueCard = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.15);
    
    svg {
      animation: ${float} 3s ease-in-out infinite;
    }
  }
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  color: #1B9C85;
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

// Simplified Divider
const SectionDivider = styled.div`
  height: 100px;
  background: linear-gradient(to bottom, white 0%, #e8f5f1 100%);
  margin-top: -1px;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <h1>Our Story</h1>
        <p>Discover the passion and principles behind Atlantis Commodities</p>
      </HeroSection>

      <CompanySection>
        <SectionTitle>Who We Are</SectionTitle>
        <CompanyContent>
          <CompanyText>
            <h2>Leaders in Commodity Distribution</h2>
            <p>
            Founded in 2021, Atlantis Commodities LLC is a regional wholesale supplier of premium packaging materials. Our vision is simple: to deliver high-quality products to our clients.
            </p>
            <p>
            Today, we operate out of California, serving clients with an extensive portfolio of products. Our success stems from an unwavering commitment to quality, ethical sourcing, and innovative logistics solutions.       
            </p>
            <CompanyHighlights>
              <HighlightItem>Prime location outside a major shipping port</HighlightItem>
              <HighlightItem>Quality assurance</HighlightItem>
              <HighlightItem>High volume purchase order fulfillment</HighlightItem>
              <HighlightItem>Competitive prices</HighlightItem>
            </CompanyHighlights>
          </CompanyText>
          <CompanyImage />
        </CompanyContent>
      </CompanySection>

      {/* <StorySection>
        <SectionTitle>Our Timeline</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>2010 - Founding</TimelineYear>
              <p>Established with a vision to revolutionize commodity trading through transparency and quality</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>2014 - First Expansion</TimelineYear>
              <p>Opened our first international office in Singapore, marking the beginning of global operations</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>2018 - Quality Certification</TimelineYear>
              <p>Achieved ISO 9001 certification for our quality management systems</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>2023 - Present Day</TimelineYear>
              <p>Now serving clients in 30+ countries with a team of 150+ dedicated professionals</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </StorySection> */}

      <ValuesSection>
        <SectionTitle color="white">Our Core Values</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <ValueIcon><FaBalanceScale /></ValueIcon>
            <ValueTitle>Integrity</ValueTitle>
            <p>We conduct business with honesty and transparency, building trust through every transaction</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon><FaUserCheck /></ValueIcon>
            <ValueTitle>Excellence</ValueTitle>
            <p>We pursue the highest standards in quality, service, and operational efficiency</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon><FaHandsHoldingCircle /></ValueIcon>
            <ValueTitle>Sustainability</ValueTitle>
            <p>Committed to environmentally responsible and socially conscious business practices</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon><FaGlobeAmericas /></ValueIcon>
            <ValueTitle>Global Reach</ValueTitle>
            <p>Local expertise with worldwide connections to serve you anywhere</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon><FaAward /></ValueIcon>
            <ValueTitle>Quality</ValueTitle>
            <p>Rigorous standards and continuous improvement in everything we do</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon><FaShieldAlt /></ValueIcon>
            <ValueTitle>Reliability</ValueTitle>
            <p>Consistent performance you can depend on in volatile markets</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      <CTA />

      <SectionDivider />
    </AboutContainer>
  );
};

export default AboutPage;