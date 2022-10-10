import React from "react";
// import coverImage from "../../assets/cover/brick-background.jpg";
import profileImage from "../../assets/profile.jpg";
import { Grid, Box } from "@mui/material";

const About = () => {
  return (
    <div>
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "5vw",
          }}
          className="about"
        >
          <h1 id="about">About Me</h1>
        </div>
      </section>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className="flex-row">
          <Grid container>
            <img
              src={profileImage}
              className="py-1 my-2"
              style={{ width: "25%" }}
              alt="profile"
            />
            <p className="px-2 my-5" style={{ width: "75%" }}>
            Full stack developer, focused on taking difficult aspects of a job and making them more streamlined, organized, cleaner, and efficient.  Born in the mountains, I have been working in the ski industry most of my career, setting off avalanches before the public accidentally does, training others in tactical high angle-rescue, and helping sick and injured patients on the slope.  I’ve devoted most of my life to heavy lifting, hard work, and developing programs to make this work easier, including a tracking system for explosives, an automated scheduler, and an easy-to-follow evacuation plan that pulls everyone together with a common goal. While I’ve been a developer my whole life, I’ve recently gotten more serious and attained a certificate from Columbia Engineering bootcamp.  I enjoy challenges and solving problems, and coding provides a platform of endless learning as well as tangible accomplishment.  I want to learn and grow as a developer, using  best practices to solve real world problems. </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
