import React from "react";
import {
  Typography,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const About = (props) => {
  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          textAlign: "center",
          alignItems: "center",
          padding: "10px 10px",
          justifyContent: "center",
        }}
      >

        <Card fullwidth sx={{ maxWidth: 1000 }}>
          <CardMedia
            component="img"
            alt="Rv Infotech"
            height="300"
            image="https://www.rvtechnolabs.com/images/bg/06.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.shortdesc}
            </Typography>{" "}
            <br />
            <Typography>
              {props.longdesc}
            </Typography>
          </CardContent>
          <CardActions style={{ alignItems: "center" }}>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default About;
