import React from "react";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div>
        <Grid
          display="flex"
          justifyContent="center"
          className="flex-row text-center"
          style={{ padding: "2%" }}
        >
          <li className="mx-2 py-3">
            <a data-testid="link" href="https://github.com/Samantha-Ruth">
              <span>GitHub</span>
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="https://www.linkedin.com/in/samantha-haberman-12871299/"
            >
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
    </footer>
  );
};

export default Footer;
