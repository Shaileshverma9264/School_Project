// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   Button,
//   useMediaQuery,
//   IconButton,
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import "../styles/Navbar.css";
// import Logo from "../images/digvijay.jpg";
// import BannerImage from "../images/COLLEGE LOGO copy.png";

// export default function Navbar() {
//   const [isMobile, setOpenisMobile] = useState(
//     useMediaQuery("(max-width:768px)")
//   );

//   return (
//     <>
//       {/* TOP HEADER */}
//       <Box className="header-container">
//         {/* Logo */}
//         {/* <img src={Logo} alt="logo" className="header-logo" /> */}

//         {/* Titles */}
//         <Box>
//           <Typography>
//             <img src={BannerImage} alt="logo" height={150} width={1200} />
//           </Typography>
//           {/* <Typography className="eng-title">
//             <h1>
//               DIGVIJAYNATH INTERMEDIATE COLLGE CHOWK BAZAR MAHARAJGANJ PIN CODE
//               273303(UP)
//             </h1>
//           </Typography>

//           <Typography className="hin-title">
//             <h1> दिग्विजयनाथ इंटरमीडिएट कॉलेज चौक बाजार, महाराजगंज </h1>
//           </Typography> */}

//           {/* <Typography className="gorakhpur-text">
//             चौक बाजार महाराजगंज
//           </Typography> */}
//         </Box>

//         {/* Person Image */}
//         <img src={Logo} alt="person" className="header-person" />
//       </Box>

//       {/* NAVBAR */}
//       <AppBar position="static" className="menu-bar">
//         <Toolbar sx={{ justifyContent: "center" }}>
//           {isMobile ? (
//             <>
//               <IconButton
//                 color="inherit"
//                 onClick={() => setOpenisMobile(!isMobile)}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </>
//           ) : (
//             <Box className="menu-wrapper">
//               {/* HOME */}
//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/"
//                 className="menu-item"
//               >
//                 Home
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/about"
//                 className="menu-item"
//               >
//                 About
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/courses"
//                 className="menu-item"
//               >
//                 Courses
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/departments"
//                 className="menu-item"
//               >
//                 Departments
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/faculty"
//                 className="menu-item"
//               >
//                 Faculty
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/admissions"
//                 className="menu-item"
//               >
//                 Admissions
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/events"
//                 className="menu-item"
//               >
//                 Events
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/gallery"
//                 className="menu-item"
//               >
//                 Gallery
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/portal"
//                 className="menu-item"
//               >
//                 Portal
//               </Button>

//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to="/contact"
//                 className="menu-item"
//               >
//                 Contact
//               </Button>
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }
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
        <Toolbar sx={{ justifyContent: "center" }}>
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
