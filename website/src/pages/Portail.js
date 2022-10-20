import React from 'react';
import Hero from '../components/Hero';
import { InfoDataTwo } from '../data/InfoData';

const Portail = () => {
  return <Hero slides={InfoDataTwo} />;
};

export default Portail;