import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderItem from "../HeaderItem/index.jsx";
import { PAGES } from "../../constants.js";
import { useNavigationContext } from "../../context.jsx";
import LogoutButton from "../LogoutButton/index.jsx";

function Header() {
  const { selectedButton, handleItemClick } = useNavigationContext();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#ffcce1" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenu-paper": { backgroundColor: "#ffcce1" },
              }}
            >
              {PAGES.map(({ route, page }) => (
                <HeaderItem
                  key={page}
                  ButtonComponent={MenuItem}
                  handleItemClick={handleItemClick}
                  handleCloseNavigation={handleCloseNavMenu}
                  selectedButton={selectedButton}
                  route={route}
                  page={page}
                />
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {PAGES.map(({ route, page }) => (
              <HeaderItem
                key={page}
                ButtonComponent={Button}
                handleItemClick={handleItemClick}
                selectedButton={selectedButton}
                route={route}
                page={page}
              />
            ))}
          </Box>
          <LogoutButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
