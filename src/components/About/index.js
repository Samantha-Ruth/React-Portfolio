import React from "react";
// import coverImage from "../../assets/cover/brick-background.jpg";
import profileImage from "../../assets/Profile_Photo_B_W.jpg";
import { Grid, Box } from "@mui/material";

const About = () => {
  return (
    <>
    <div className="box">
      <div className="hero">
        <div className="name">
          <span className="portfolio-name name1" role="img">
            Samantha
          </span>
          <span className="portfolio-name name2" role="img">
            Haberman
          </span>
        </div>
        <div className="title">
          <span className="portfolio-name title1">Full-Stack</span>
        </div>
        <div className="title">
          <span className="portfolio-name title2">Developer</span>
        </div>
      </div>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={0.5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={7} sm={6} md={4}>
              <img src={profileImage} alt="profile" className="py-1 my-2" />
            </Grid>
            <Grid item xs={10} sm={10} md={7}>
              <p className="about_text">
                Full stack developer, focused on taking difficult aspects of a
                job and making them more streamlined, organized, cleaner, and
                efficient. Born in the mountains, I have been working in the ski
                industry most of my career, setting off avalanches before the
                public accidentally does, training others in tactical high
                angle-rescue, and helping sick and injured patients on the
                slope. I’ve devoted most of my life to heavy lifting, hard work,
                and developing programs to make this work more efficient. I
                continue to grow as a developer, meeting challenges, solving
                problems, and making everyone's day a little easier.
              </p>
            </Grid>
            <Grid container justifyContent="center" style={{ width: "100%" }}>
              <div className="icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="github icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  alt="html5 icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  alt="css3 icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="javascript icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                  alt="jquery icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                  alt="bootstap icon"
                  style={{ width: "5%", padding: "0.5%" }}
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
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
                  alt="heroku"
                  style={{ width: "5%", padding: "0.5%" }}
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
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                  alt="sequelize icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
                  alt="graphql icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="redux icon"
                  style={{ width: "5%", padding: "0.5%" }}
                  className="img-icon"
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default About;
