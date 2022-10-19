import React, {useState} from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} /> 
  
      
    </>
  );
}

export default App;
