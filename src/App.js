import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';


function App() {
  return (
    <div> 
      <Nav />
      <main>
        <ContactForm />
        <About />
      </main>

    </div>
  );
}

export default App;
