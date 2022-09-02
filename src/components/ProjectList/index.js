import React, { useState } from 'react';

const ProjectList = ({ name }) => {

  const [projects] = useState([
    {
      name: 'Healthcare_Hero',
      description: 'HealthCare Hero is web application to help patients find medical services along with their cost and respective provider offering that service.',
      link: "https://powerful-island-90418.herokuapp.com/"
    },
    {
      name: 'Budget Tracker',
      description: "A handy tool to keep track of your budget, the user can enter deposits and withdrawls and the app will track these transactions even when the interenet connection is spotty",
      link: "https://whispering-escarpment-95024.herokuapp.com"
    },
    {
      name: 'COVID-19 Tracker',
      description: 'Stay informed and track each countries COVID-19 infection rates, as well as obtain general information about each country.',
      link: "https://randiferous.github.io/group-covid-project"
    },
    {
      name: 'Tech-Blog',
      description: 'A tech developers venting haven, a user can post a tech blog and comment on others blogs.',
      link: "https://limitless-hollows-96215.herokuapp.com"
    },
    {  
      name: 'Password-Generator',
      description: 'Click a button to generate a password that is 8-128 characters in length with lowercase, uppercase, numeric, and special characters.',
      link: "https://samantha-ruth.github.io/Password-Generator/"
    },
    {
      name: 'Weather-Dashboard',
      description: 'Find the current and forecasted weather conditions for any city!',
      link: 'https://samantha-ruth.github.io/Weather-Dashboard'
    }
  ]);

  const currentProjects = projects.filter((project) => project.name === name);

  return (
    <div>
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
