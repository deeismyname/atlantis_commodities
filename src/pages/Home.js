import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProductCard from '../components/ProductCard';
import { products, testimonials, partners, stats } from '../data/data';
import heroImage from '../assets/hero.jpeg';
import AboutPreviewSection from '../components/AboutPreviewSection';

// Global Styles
const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
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

const SectionSubtitle = styled.p`
  text-align: center;
  color: #555;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
`;

// Main Container
const HomeWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
`;

// Hero Section
const Hero = styled.section`
  position: relative;
  height: 90vh;
  min-height: 600px;
  background: linear-gradient(rgba(7, 15, 43, 0.7), rgba(7, 15, 43, 0.5)), 
              url(${heroImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff' opacity='.25'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' fill='%23ffffff' opacity='.5'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff'/%3E%3C/svg%3E") no-repeat;
    background-size: cover;
    z-index: 1;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1s ease-out;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1s ease-out 0.2s forwards;
    opacity: 0;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroButton = styled.button`
  background: #1B9C85;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeInUp 1s ease-out 0.4s forwards;
  opacity: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: #157a6a;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

// Process Section
const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 2rem;
  position: relative;
  
  &:not(:last-child)::after {
    content: '→';
    position: absolute;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #1B9C85;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      content: '';
    }
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: #070F2B;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h3`
  color: #070F2B;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #666;
`;

// Premium Section
const PremiumSection = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f9f9f9 0%, #e8f5f1 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, #1B9C85, #070F2B);
  }
`;

const ProductFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#070F2B' : 'white'};
  color: ${props => props.active ? 'white' : '#070F2B'};
  border: 1px solid #ddd;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #070F2B;
    color: white;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: #070F2B;
  color: white;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.1);
    font-family: serif;
  }
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.span`
  font-weight: bold;
`;

const ClientCompany = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

// Stats Section
const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 2rem;
  background: #1B9C85;
  color: white;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
`;

// Newsletter Section
const NewsletterSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    border-radius: 4px;
    margin-bottom: 1rem;
  }
`;

const SubscribeButton = styled.button`
  background: #070F2B;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1B9C85;
  }
  
  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

// Partners Section
const PartnersSection = styled.section`
  padding: 3rem 2rem;
  background: white;
`;

const PartnerLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PartnerLogo = styled.img`
  height: 60px;
  width: auto;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HomeWrapper>
        <Hero>
          <h1>Atlantis Commodities LLC</h1>
          <p>Global leaders in premium commodity distribution with unmatched quality and service</p>
          <HeroButton>Explore Our Products</HeroButton>
        </Hero>

        <AboutPreviewSection />

        <ProcessSection>
          <SectionTitle>Our Proven Process</SectionTitle>
          <ProcessSteps>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepTitle>Sourcing</StepTitle>
              <StepDescription>We identify premium suppliers worldwide through our extensive network</StepDescription>
            </ProcessStep>
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepTitle>Quality Assurance</StepTitle>
              <StepDescription>Rigorous testing and inspection at every stage of the supply chain</StepDescription>
            </ProcessStep>
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepTitle>Logistics</StepTitle>
              <StepDescription>Efficient global distribution with temperature-controlled transport</StepDescription>
            </ProcessStep>
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepTitle>Delivery</StepTitle>
              <StepDescription>Reliable just-in-time delivery to your specified location</StepDescription>
            </ProcessStep>
          </ProcessSteps>
        </ProcessSection>

        <PremiumSection>
          <SectionTitle>Our Premium Selection</SectionTitle>
          <ProductFilters>
            <FilterButton active>All</FilterButton>
            <FilterButton>Agricultural</FilterButton>
            <FilterButton>Minerals</FilterButton>
            <FilterButton>Energy</FilterButton>
          </ProductFilters>
          <ProductGrid>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </PremiumSection>

        <TestimonialsSection>
          <SectionTitle color="white">What Our Clients Say</SectionTitle>
          <TestimonialGrid>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <Quote>{testimonial.text}</Quote>
                <ClientInfo>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientCompany>{testimonial.company}</ClientCompany>
                </ClientInfo>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </TestimonialsSection>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.value}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsSection>

        <NewsletterSection>
          <SectionTitle>Stay Updated</SectionTitle>
          <SectionSubtitle>Subscribe to our newsletter for market insights and product updates</SectionSubtitle>
          <NewsletterForm>
            <Input type="email" placeholder="Your email address" />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </NewsletterForm>
        </NewsletterSection>

        <PartnersSection>
          <SectionTitle>Trusted By</SectionTitle>
          <PartnerLogos>
            {partners.map(partner => (
              <PartnerLogo 
                key={partner.id} 
                src={partner.logo} 
                alt={partner.name} 
              />
            ))}
          </PartnerLogos>
        </PartnersSection>
      </HomeWrapper>
    </>
  );
};

export default Home;