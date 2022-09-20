import React from "react";
import { Grid, Card } from "@mui/material";
import healthcare_hero from "../../assets/small/0.jpg";
import budget_tracker from "../../assets/small/1.jpg";
import COVID_Tracker from "../../assets/small/2.jpg";
import Tech_Blog from "../../assets/small/3.jpg";
import Password_Generator from "../../assets/small/4.jpg";
import Weather_Dashboard from "../../assets/small/5.jpg";

function Portfolio() {
  return (
      <Grid flexcontainerVertical>
        <Card item xs={6}>
          <img
            src={healthcare_hero}
            alt="Healthcare Hero"
            style={{ width: "30%" }}
            className="img-thumbnail mx-1"
          />
        </Card>
        <Card item xs="6">
          <img
          src={budget_tracker}
          alt="Budget Tracker"
          style={{ width: "30%" }}
          className="img-thumbnail mx-1"
        />
        </Card>
        <Grid item xs="12">
        <img
          src={COVID_Tracker}
          alt="COVID-19 Tracker"
          style={{ width: "30%" }}
          width="300 px"
          className="img-thumbnail mx-1"
        />
        </Grid>
        <Grid item xs="12">
        <img
          src={Tech_Blog}
          alt="Tech-Blog"
          style={{ width: "30%" }}
          className="img-thumbnail mx-1"
        />
        </Grid>
        <Grid item xs="12">
        <img
          src={Password_Generator}
          alt="Password Generator"
          style={{ width: "30%" }}
          className="img-thumbnail mx-1"
        />
        <Grid item xs="6"></Grid>
        <img
          src={Weather_Dashboard}
          alt="Weather_Dashboard"
          style={{ width: "30%" }}
          className="img-thumbnail mx-1"
        />
        </Grid>
      </Grid>
  );
}
export default Portfolio;
