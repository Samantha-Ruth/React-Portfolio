import React from "react";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div>
        <Grid display="flex" justifyContent="center" className="flex-row text-center" style={{padding: "2%"}}>
          <li className="mx-2 py-3">
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
        </Grid>
      </div>
      <div>
              <div display="flex" style={{ width: "100%" }}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="github icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  alt="html5 icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  alt="css3 icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="javascript icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                  alt="jquery icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                  alt="bootstap icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="nodejs icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                  alt="npm icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
                  alt="heroku"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="express icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                  alt="sequelize icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
                  alt="graphql icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="redux icon"
                  style={{ width: "6%", padding: "0.5%" }}
                  className="img-icon"
                />
              </div>
            </div>
    </footer>
  );
};

export default Footer;
