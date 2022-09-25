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
      <Grid container spacing={2}>
        <Grid xs={6} lg={6}>
          <div className="project1 flex">
            <img src={recipe} className="px-1 mx-2" alt="profile" />
            <Container fluid className="prj1">
              <Link display="flex" justifyContent="center" href="https://young-shelf-43673.herokuapp.com/" target="_blank" rel="noreferrer">Cuisine</Link>
              <Grid display="flex" justifyContent="center">Project 1 Description description</Grid>
            </Container>
          </div>
        </Grid>
        <Grid xs={6} lg={6}>
          <div className="project1">
            <img src={COVID} className="px-1 mx-2" alt="profile" />
            <Container fluid className="prj2">
              <Link display="flex" justifyContent="center" href="https://samantha-ruth.github.io/Group-Covid-Project/" target="_blank" rel="noreferrer">COVID Tracker</Link>
              <Grid display="flex" justifyContent="center" >Project 2 Description description</Grid>
            </Container>
          </div>
        </Grid>
        <Grid xs={6} lg={6}>
          <div className="project1">
            <img src={healthcare_Hero} className="px-1 mx-2" alt="profile" />
            <Container fluid className="prj1">
              <Link display="flex" justifyContent="center" href="https://quiet-river-83898.herokuapp.com" target="_blank" rel="noreferrer">Healthcare Hero</Link>
              <Grid display="flex" justifyContent="center">Project 3 Description description</Grid>
            </Container>
          </div>
        </Grid>
        <Grid xs={6} lg={6}>
          <Grid container fluid xs={12} lg={12}>
            <Grid xs={8}>
              <img
                src={budget}
                alt="Budget"
              />
            </Grid>
            <Grid xs={4}>
              <Button display="flex" justifyContent="center" href="https://whispering-escarpment-95024.herokuapp.com" target="_blank" rel="noreferrer">Budget Tracker</Button>
              <div display="flex" justifyContent="center">PROJECT 4 Description Description</div>
            </Grid>
          </Grid>
          <Grid container fluid xs={12} lg={12}>
            <Grid xs={8}>
              <img
                src={code}
                alt="Code"
              />
            </Grid>
            <Grid xs={4}>
              <Button display="flex" justifyContent="center" href="https://samantha-ruth.github.io/Code-Quiz/" target="_blank" rel="noreferrer">Code Challenge</Button>
              <div display="flex" justifyContent="center">PROJECT 5 Description Description</div>
            </Grid>
          </Grid>
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
