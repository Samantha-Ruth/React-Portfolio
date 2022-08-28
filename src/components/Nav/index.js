import React from "react";

// const projects = [
//     { name: "HTML", description: "Examples of projects using HTML5" },
//     { name: "Javascript", description: "Examples of projects using Javascript" },
//     { name: "SQL", description: "Examples of projects using SQL" }
// ];

function Nav() {
  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img">Samantha Haberman</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick("Contact")}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
