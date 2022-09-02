import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";

function Nav(props) {
  const [categories] = useState([
    { name: "Portfolio", description: "Project created with SQL database." },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const { contactSelected, setContactSelected } = props;

  return (
    <header className="flex-row mx-auto">
      <h2 className="mx-2">
        <a data-testid="link" href="/">
          <span role="img">Samantha Haberman</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About Me
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="https://drive.google.com/file/d/1oKAYi-OOp9uZWxz5RP-Ru9P3EGcvJJP_/view?usp=sharing">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
