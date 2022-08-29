import React from "react";
import { capitalizeFirstLetter } from '../../assets/utils/helpers';
import ProjectList from '../ProjectList';

function Portfolio({currentCategory}) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid='h1tag'>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;