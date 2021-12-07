import React from "react";

import {
  Container,
  Divider,
} from "@mui/material";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {



  return (
    <>
      <Container
        maxWidth="lg"
        style={{ textAlign: "center", alignItems: "center" }}
      >
        <Services />
        <Divider />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
