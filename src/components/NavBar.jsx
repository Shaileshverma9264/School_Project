import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";

import Logo from "../images/digvijay.jpg";
import BannerImage from "../images/COLLEGE LOGO copy.png";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Departments", path: "/departments" },
    { label: "Faculty", path: "/faculty" },
    { label: "Admissions", path: "/admissions" },
    { label: "Events", path: "/events" },
    { label: "Gallery", path: "/gallery" },
    { label: "Portal", path: "/portal" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <Box className="header-container">
        <Box>
          <img src={BannerImage} alt="banner" className="banner-img" />
        </Box>
      </Box>

      {/* NAVBAR */}
      <AppBar position="static" className="menu-bar">
        <Toolbar sx={{ justifyContent: "left" }}>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>

              {/* MOBILE DRAWER */}
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250 }} role="presentation">
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem
                        key={index}
                        onClick={() => setDrawerOpen(false)}
                        component={RouterLink}
                        to={item.path}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box className="menu-wrapper">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={RouterLink}
                  to={item.path}
                  className="menu-item"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
