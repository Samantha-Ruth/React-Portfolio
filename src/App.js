import React, { useState } from 'react';
import './App.css';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';

import Footer from './components/Footer';

function App(props) {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
        case "About":
            return <About />
        case "Portfolio":
            return <Portfolio />
        case "Contact":
            return <Contact />
        default:
            return <About></About>
    }
}

  return (
<div>
  <Nav currentPage={currentPage} changeCurrentPage={setCurrentPage} />
  {renderPage()}
  <Footer />
</div>
  );
}

export default App;

