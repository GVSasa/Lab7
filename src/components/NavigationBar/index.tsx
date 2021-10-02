import * as React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"; 
/**
 * Navigationbar elements
 * @returns NavigationBar
 */

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="colorBack">
        <Toolbar variant="dense">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          <Link className="product-list-link "to={`/`}>Chambasoft Store</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}; 

export default NavigationBar;