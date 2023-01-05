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

const SocialLogo = styled(Link)`
color: #fff; 
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem; 
display: flex;
align-items: center;
margin-bottom: 16px;
font-size: 90%;

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
              href='/https://instagram.com/cloture__uvaldo_37?igshid=YmMyMTA2M2Y='
              rel='noopener noreferrer'
              target='_blank'
              aria-label="Suivez-nous sur instagram"
            >
              <Instagram />
            </a>
            <a
              href='/https://www.facebook.com/jordan.uvaldo'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Facebook />
            </a>
          </SocialIcons>
          <Contact>
        
          </Contact>
        </FooterBottom>
        <FooterContainer>
            <SocialLogo to="/">Ce site a été réalisé par Océane Sallé, développeuse web front-end : www.webdeveloppeuse.com.</SocialLogo>
    </FooterContainer>
      </Container>
    </Section>
  );
};

export default Footer;