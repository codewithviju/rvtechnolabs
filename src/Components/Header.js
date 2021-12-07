import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Divider } from "@material-ui/core";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rv Technolabs
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              Contact
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/services");
              }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/about-us");
              }}
            >
              About
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ padding: "50px" }}>
        <Typography variant="h3" gutterBottom>
          Welcome To RV Technolabs
        </Typography>

        <Typography variant="p" gutterBottom>
          Here You Will Find Best IT Services
        </Typography>
      </div>
      <Divider style={{ marginBottom: "20px" }} />
    </>
  );
};

export default Header;
