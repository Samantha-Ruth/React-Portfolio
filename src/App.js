import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
    <div> 
      <Nav 
        portfolioSelected = {portfolioSelected}
        setPortfolioSelected = {setPortfolioSelected}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
        ></Nav>
    </div>
    <main>
        {!contactSelected  && !portfolioSelected ? (
          <>
          {/* <Portfolio /> */}
          <About/>
          </>
          ) : (
            <ContactForm/>
          )}
    </main>
      <footer>
          {/* < Footer /> */}
      </footer>
      </>
  );
}

export default App;

