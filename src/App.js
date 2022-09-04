import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [categories] = useState([
    {
      name: 'SQL',
      description: "Used SQL to create and manipulate database."
    },
    {
      name: 'Express',
      description: "Used Express to intitiate server."
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div> 
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
        ></Nav>
      <main>
        {!contactSelected  ? (
          <>
          <Portfolio />
          <About/>
          </>
          ) : (
            <ContactForm/>
          )}
      </main>
      <footer>
          < Footer />
      </footer>

    </div>
  );
}

export default App;
