import React from "react";

function Nav(props) {

  const { portfolioSelected, setPortfolioSelected } = props;

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

          {/* PORTFOLIO STARTS HERE */}
          <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>
        
          {/* CONTACT STARTS HERE */}
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
