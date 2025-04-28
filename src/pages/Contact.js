import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa'

// Animation for the submit button
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactHeader = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #070F2B;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: #1B9C85;
    }
  }

  p {
    color: #555;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #070F2B;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #1B9C85;
      box-shadow: 0 0 0 3px rgba(27, 156, 133, 0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #1B9C85;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #157a6a;
    animation: ${pulse} 1.5s infinite;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    animation: none;
  }
`;

const ContactInfo = styled.div`
  background: #070F2B;
  color: white;
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;

  svg {
    font-size: 1.5rem;
    color: #1B9C85;
    margin-top: 0.3rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p, a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const SuccessMessage = styled.div`
  background: rgba(27, 156, 133, 0.1);
  border: 1px solid #1B9C85;
  color: #1B9C85;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1.5rem;
  text-align: center;
`;

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      emailjs.sendForm(
        'service_gchjn8s',
        'template_wpkq6xj',
        form.current,
        '7x2VxJov8H0_ch0dQ'
      )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setIsSuccess(true);
        form.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        alert('There was an error sending your message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    };
  
    return (
      <ContactContainer>
        <ContactHeader>
          <h1>Get In Touch</h1>
          <p>Have questions about our products or services? Send us a message and we'll get back to you promptly.</p>
        </ContactHeader>
  
        <ContactForm ref={form} onSubmit={sendEmail}>
          <FormGroup>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </FormGroup>
  
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </FormGroup>
  
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </FormGroup>
  
          <FormGroup>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required />
          </FormGroup>
  
          <SubmitButton type="submit" disabled={isSubmitting}>
            <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
  
          {isSuccess && (
            <SuccessMessage>
              Thank you! Your message has been sent successfully.
            </SuccessMessage>
          )}
        </ContactForm>
  
        <ContactInfo>
          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h3>Our Location</h3>
              <p>123 Commodity Avenue, Trade District<br />New York, NY 10001</p>
            </div>
          </InfoItem>
  
          <InfoItem>
            <FaPhone />
            <div>
              <h3>Phone</h3>
              <p><a href="tel:+18005551234">+1 (650) 447-9207</a></p>
            </div>
          </InfoItem>
  
          <InfoItem>
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p><a href="mailto:info@atlantiscommoditiesllc.com">info@atlantiscommoditiesllc.com</a></p>
            </div>
          </InfoItem>
        </ContactInfo>
      </ContactContainer>
        
    );
  };
  
  export default Contact;