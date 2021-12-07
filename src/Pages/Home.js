import React from "react";

import {
  Container,
  Divider,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
        textAlign: "center",
      }}
    >
      •
    </Box>
  );

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
