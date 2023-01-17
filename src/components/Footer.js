import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

import {
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';


const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;


const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #eb5e28;
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const FooterContainer = styled.footer`
background: #000d1a; 
`; 


const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>
              Confiez-nous <br /> votre terrain
            </h3>
          </Quote>
          <FooterInfo>
            <h4>Nous</h4>
            <Link to='/homes'>Téléphone</Link>
            <Link to='/homes'>Adresse mail</Link>
            <Link to='/homes'>Région</Link>
          </FooterInfo>
          <FooterInfo>
            <h4>Contacter</h4>
            <Link to='/homes'>07.64.16.91.08</Link>
            <Link to='/homes'>uvaldo.cloture@gmail.com</Link>
            <Link to='/homes'>Indre-et-Loire</Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href='https://www.instagram.com/uvaldocloture/?hl=fr'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Suivez-nous sur instagram'
            >
              <Instagram />
            </a>
            <a
              href='https://www.facebook.com/Cl%C3%B4tures-Portails-uvaldo-jordan-104546015865320'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Rejoignez-nous sur facebook'
            >
              <Facebook />
            </a>
          </SocialIcons>
          <Contact>
        
          </Contact>
        </FooterBottom>
        <FooterContainer>
       <span>
            Ce site à été réalisé par 
            <a onClick="window.open(this.href); return false;" href="https://webdeveloppeuse.com" 
            title="Développeuse Web Freelance"> webdeveloppeuse</a>
            </span>
    </FooterContainer>
      </Container>
    </Section>
  );
};

export default Footer;