import React from "react";
import { Grid, Container, Box, Button, Link } from "@mui/material";
import recipe from "../../assets/projects/Recipe.png";
import healthcare_Hero from "../../assets/projects/Healthcare-Hero.PNG";
import COVID from "../../assets/projects/COVID_by_Country.jpg";
import budget from "../../assets/projects/Budget_tracker.png";
import code from "../../assets/projects/Code_quiz.jpg";

function Portfolio() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={5} lg={5} 
        className="project1">
           <Link display="flex" justifyContent="center" href="https://young-shelf-43673.herokuapp.com/" target="_blank" rel="noreferrer">Supper Snacks</Link>
            <img className="image" src={recipe}   style={{ width: "90%" }} alt="profile" />
            <Container fluid className="prj1">
              <Grid display="flex" justifyContent="center">Compose a meal with what's left in your fridge!</Grid>
              <Link display="flex" justifyContent="center" href="https://github.com/Samantha-Ruth/recipe-gen" target="_blank" rel="noreferrer">GitHub</Link>
            </Container>
        </Grid>
        <Grid xs={5} lg={5} className="project1">
            <Link display="flex" justifyContent="center" href="https://samantha-ruth.github.io/Group-Covid-Project/" target="_blank" rel="noreferrer">COVID Tracker</Link>
            <img src={COVID} className="px-1 mx-2" alt="profile" />
            <Container fluid className="prj2">
              <Grid display="flex" justifyContent="center" >Front-end application that provides COVID-19 data per country.</Grid>
              <Link display="flex" justifyContent="center" href="https://github.com/Samantha-Ruth/recipe-gen" target="_blank" rel="noreferrer">GitHub</Link>
            </Container>
        </Grid>
        <Grid xs={5} lg={5} className="project1">
          <Link display="flex" justifyContent="center" href="https://quiet-river-83898.herokuapp.com" target="_blank" rel="noreferrer">Healthcare Hero</Link>
            <img src={healthcare_Hero} className="px-1 mx-2" alt="profile" />
            <Container fluid className="prj1">
              <Grid display="flex" justifyContent="center">Web application to help patients compare the cost of a service across different medical providers.</Grid>
              <Link display="flex" justifyContent="center" href="https://github.com/Samantha-Ruth/recipe-gen" target="_blank" rel="noreferrer">GitHub</Link>
            </Container>
        </Grid>
        <Grid xs={5} lg={5} className="project1">
          <Link display="flex" justifyContent="center" href="https://whispering-escarpment-95024.herokuapp.com" target="_blank" rel="noreferrer">Budget Tracker</Link>
              <img
                src={budget}
                alt="Budget"
                className="px-1 mx-2" 
              />
              <Container fluid className="prj1">
              <Grid display="flex" justifyContent="center">Keep track of your finances!</Grid>
              <Link display="flex" justifyContent="center" href="https://github.com/Samantha-Ruth/recipe-gen" target="_blank" rel="noreferrer">GitHub</Link>
            </Container>
        </Grid>
      </Grid>
    </Box>
  );
  // <Grid
  //  container
  //   direction="column"
  //   justifyContent="center"
  //   alignItems="center"
  //   >
  //   <Grid>
  //     <div>Something something something</div>
  //   </Grid>

  //   <Grid
  //     container
  //     direction="row"
  //     justifyContent="center"
  //     alignItems="center"
  //   >
  //     <Grid item xs={4}>
  //       <div>1</div>
  //     </Grid>
  //     <Grid item xs={4}>
  //       <div>2</div>
  //     </Grid>
  //     <Grid item xs={4}>
  //       <div>3</div>
  //     </Grid>
  //   </Grid>
  // </Grid>
  // <Grid flexcontainerVertical>
  //   <Row>
  //   <Card item xs={4}>
  //     <img
  //       src={healthcare_hero}
  //       alt="Healthcare Hero"
  //       style={{ width: "100%" }}
  //       className="img-thumbnail mx-1"
  //     />
  //   </Card>
  //   <Card item xs="6">
  //     <img
  //     src={budget_tracker}
  //     alt="Budget Tracker"
  //     style={{ width: "30%" }}
  //     className="img-thumbnail mx-1"
  //   />
  //   </Card>
  //   <Grid item xs="12">
  //   <img
  //     src={COVID_Tracker}
  //     alt="COVID-19 Tracker"
  //     style={{ width: "30%" }}
  //     width="300 px"
  //     className="img-thumbnail mx-1"
  //   />
  //   </Grid>
  //   <Grid item xs="12">
  //   <img
  //     src={Tech_Blog}
  //     alt="Tech-Blog"
  //     style={{ width: "30%" }}
  //     className="img-thumbnail mx-1"
  //   />
  //   </Grid>
  //   <Grid item xs="12">
  //   <img
  //     src={Password_Generator}
  //     alt="Password Generator"
  //     style={{ width: "30%" }}
  //     className="img-thumbnail mx-1"
  //   />
  //   <Grid item xs="6"></Grid>
  //   <img
  //     src={Weather_Dashboard}
  //     alt="Weather_Dashboard"
  //     style={{ width: "30%" }}
  //     className="img-thumbnail mx-1"
  //   />
  //   </Grid>
  //   </Row>
  // </Grid>
  // );
}
export default Portfolio;
