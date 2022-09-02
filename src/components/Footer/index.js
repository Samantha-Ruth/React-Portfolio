import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul className="flex-row text-center">
          <li className="mx-2">
            <a
              data-testid="link"
              href="https://github.com/Samantha-Ruth"
            >
              <span>GitHub</span>
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="https://www.linkedin.com/in/samantha-haberman-12871299/">
              <span>LinkedIn</span>
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="https://www.facebook.com/samantha.haberman.35"
            >
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
