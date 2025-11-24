import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";
import Logo from "../images/logo.png";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      {/* TOP HEADER */}
      <Box className="header-container">
        {/* Logo */}
        <img src={Logo} alt="logo" className="header-logo" />

        {/* Titles */}
        <Box className="header-text">
          {/* <img src={Logo} alt="logo" className="header-logo" /> */}
          <Typography className="eng-title">
            <h1>
              DIGVIJAYNATH INTERMEDIATE COLLGE CHOWK BAZAR MAHARAJGANJ PIN CODE
              273303(UP)
            </h1>
          </Typography>

          <Typography className="hin-title">
            <h1> दिग्विजयनाथ इंटरमीडिएट कॉलेज चौक बाजार, महाराजगंज </h1>
          </Typography>

          {/* <Typography className="gorakhpur-text">
            चौक बाजार महाराजगंज
          </Typography> */}
        </Box>

        {/* Person Image */}
        <img src={Logo} alt="person" className="header-person" />
      </Box>

      {/* NAVBAR */}
      <AppBar position="static" className="menu-bar">
        <Toolbar sx={{ justifyContent: "center" }}>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box className="menu-wrapper">
              {/* HOME */}
              <Button
                color="inherit"
                component={RouterLink}
                to="/"
                className="menu-item"
              >
                Home
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/about"
                className="menu-item"
              >
                About
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/courses"
                className="menu-item"
              >
                Courses
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/departments"
                className="menu-item"
              >
                Departments
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/faculty"
                className="menu-item"
              >
                Faculty
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/admissions"
                className="menu-item"
              >
                Admissions
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/events"
                className="menu-item"
              >
                Events
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/gallery"
                className="menu-item"
              >
                Gallery
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/portal"
                className="menu-item"
              >
                Portal
              </Button>

              <Button
                color="inherit"
                component={RouterLink}
                to="/contact"
                className="menu-item"
              >
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
