import React from "react";
import {
  Typography,
  Container,
  Divider,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const About = () => {
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
              Get to know us better.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We truly care about our products. We are dedicated to providing
              you with the best IT solutions of your requirements.
            </Typography>{" "}
            <br />
            <Typography>
              Our simplistic process keeps you involved at every stage. We
              brainstorm with you to understand your requirements and ensure
              that they are met. Combined with your ideas and our creative
              inputs we come out with the best design for your needs and
              requirements.
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
