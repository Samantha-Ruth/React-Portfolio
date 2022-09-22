import React from "react";
import { Grid, Container, Box, Button, Link } from "@mui/material";
import Healthcare_Hero from "../../assets/projects/Healthcare-Hero.PNG";
import COVID from "../../assets/projects/COVID_by_Country.jpg";
// import COVID_Tracker from "../../assets/small/2.jpg";
// import Tech_Blog from "../../assets/small/3.jpg";
// import Password_Generator from "../../assets/small/4.jpg";
// import Weather_Dashboard from "../../assets/small/5.jpg";
import profileImage from "../../assets/cover/profile_image2.JPG";
import Recipe from "../../assets/projects/Recipe.png";

function Portfolio() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} lg={6}>
          <div className="project1 flex">
            <img src={Recipe} className="px-1 mx-2" alt="profile" />
            <Container maxWidth="sm" className="prj1">
            <Link href="#">Cuisine</Link>
              <Grid>Description description</Grid>
            </Container>
          </div>
        </Grid>
        <Grid xs={6} lg={6}>
          <div className="project1">
            <img src={Healthcare_Hero} className="px-1 mx-2" alt="profile" />
            <Button>Healthcare Hero</Button>
            <div>PROJECT 1</div>
          </div>
        </Grid>
        <Grid xs={6} lg={6}>
        <div className="project1">
            <img src={COVID} className="px-1 mx-2" alt="profile" />
            <Button>Healthcare Hero</Button>
            <div>PROJECT 3</div>
          </div>
        </Grid>
        <Grid xs={6} lg={6}>
          <Grid xs={6} lg={6} className="my-4">
            <div className="my-4">
              <img
                src={COVID}
                className="px-1 mx-2"
                style={{ width: "50%" }}
                alt="profile"
              />
              <Button>Healthcare Hero</Button>
              <div>PROJECT 4</div>
            </div>
          </Grid>
          <Grid xs={6} lg={6}>
            <img
              src={profileImage}
              // className="px-1 mx-2"
              // style={{ width: "70%" }}
              alt="profile"
            />
            <Button>Healthcare Hero</Button>
            <div>PROJECT 4</div>
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
