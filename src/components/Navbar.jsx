// src/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Mango
          </Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/card">
            Card
          </Button>
          <Button color="inherit" component={Link} to="/grid">
            Grid
          </Button>
          <Button color="inherit" component={Link} to="/table">
            Table
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
