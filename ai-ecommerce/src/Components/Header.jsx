import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          AI E-Commerce
        </Typography>


        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/product-detail/:id"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/cart"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Cart
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
