import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';


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
        currentCAtegory={currentCategory}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
        ></Nav>
      <main>
        {!contactSelected  ? (
          <>
          <Portfolio currentCategory={currentCategory}/>
          <About/>
          </>
          ) : (
            <ContactForm/>
          )}
      </main>

    </div>
  );
}

export default App;
