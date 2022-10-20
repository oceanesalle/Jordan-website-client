import React, {useState} from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages';

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
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer/> 
    </>
  );
}

export default App;
