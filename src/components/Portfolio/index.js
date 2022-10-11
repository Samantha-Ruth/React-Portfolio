import React from "react";
import { Grid, Box, IconButton, Link } from "@mui/material";
import recipe from "../../assets/projects/Recipe.png";
import healthcare_Hero from "../../assets/projects/Healthcare-Hero.PNG";
import COVID from "../../assets/projects/COVID_by_Country.jpg";
import budget from "../../assets/projects/Budget_tracker.png";
import GitHubIcon from "@mui/icons-material/GitHub";

function Portfolio() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container 
        spacing={1}
        justifyContent="center">
        <Grid xs={10} md={5} className="project1">
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Link
              display="flex"
              justifyContent="center"
              href="https://young-shelf-43673.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Supper Snacks
            </Link>
            <IconButton
              size="large"
              aria-label="delete"
              href="https://github.com/Samantha-Ruth/supper-snacks"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <img
            className="image"
            src={recipe}
            style={{ width: "90%" }}
            alt="profile"
          />
          <Grid display="flex" justifyContent="center" className="my-1">
            Compose a meal with what's left in your fridge!
          </Grid>
        </Grid>
        <Grid xs={10} md={5} className="project1">
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Link
              display="flex"
              justifyContent="center"
              href="https://samantha-ruth.github.io/Group-Covid-Project/"
              target="_blank"
              rel="noreferrer"
            >
              COVID Tracker
            </Link>
            <IconButton
              size="large"
              aria-label="delete"
              href="https://github.com/Samantha-Ruth/Group-Covid-Project"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <img src={COVID} className="px-1 mx-2" alt="profile" />
          <Grid display="flex" justifyContent="center" className="my-1">
            Research COVID-19 data per country.
          </Grid>
        </Grid>
        <Grid xs={10} md={5}className="project1">
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Link
              display="flex"
              justifyContent="center"
              href="https://quiet-river-83898.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              Healthcare Hero
            </Link>
            <IconButton
              size="large"
              aria-label="delete"
              href="https://github.com/Samantha-Ruth/healthcare-hero"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <img src={healthcare_Hero} className="px-1 mx-2" alt="profile" />
          <Grid display="flex" justifyContent="center" className="my-1">
            Web application to help patients compare the cost of a service
            across different medical providers.
          </Grid>
        </Grid>
        <Grid xs={10} md={5} className="project1">
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Link
              display="flex"
              justifyContent="center"
              href="https://whispering-escarpment-95024.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              Budget Tracker
            </Link>
            <IconButton
              size="large"
              aria-label="delete"
              href="https://github.com/Samantha-Ruth/Budget-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <img src={budget} alt="Budget" className="px-1 mx-2" />
          <Grid display="flex" justifyContent="center" className="my-1">
            Keep track of your finances!
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Portfolio;
