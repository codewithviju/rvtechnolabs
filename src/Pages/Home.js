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
        <Services heading="We Will Make Your Dreams Came True" />
        <Divider />
        <Contact heading="You Can Contact by Filling Below Form.." />
      </Container>
    </>
  );
};

export default Home;
