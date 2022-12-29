import React, {useState, useEffect, useLayoutEffect} from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import { Routes ,Route, useLocation } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages';
import About from './pages/About';
import Clotures from './pages/Clotures';
import Realisations from './pages/Realisations';
import Portail from './pages/Portail';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );

  useEffect(() => {
    Aos.init({});
  }, []);


  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/clotures' element={<Clotures/>} /> 
        <Route path='/portail' element={<Portail/>} />
        
        <Route path='/contact' element={<Contact/>} />
        <Route path='/realisations' element={<Realisations/>} />
        </Routes>
      <Footer/> 
    </>
  );
}

export default App;
