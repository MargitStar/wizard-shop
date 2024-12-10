import React, { useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { page: "Home", route: "/" },
  { page: "Elixirs", route: "/elixirs" },
  { page: "Houses", route: "/houses" },
  { page: "Ingredients", route: "/ingredients" },
  { page: "Spells", route: "/spells" },
  { page: "Wizards", route: "/wizards" },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentPage =
    useMemo(
      () => pages.filter((item) => item.route === currentRoute)[0],
      [currentRoute]
    ) || pages[0];

  const [selectedButton, setSelectedButton] = React.useState(currentPage.page);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleClick = (route, page) => {
    if (currentRoute !== route) {
      navigate(route);
      setSelectedButton(page);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (route, page) => {
    setAnchorElNav(null);
    if (route !== null || page !== null) {
      handleClick(route, page);
    }
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
              onClose={() => handleCloseNavMenu(null, null)}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenu-paper": { backgroundColor: "#ffcce1" },
              }}
            >
              {pages.map(({ route, page }) => (
                <MenuItem
                  key={page}
                  onClick={() => handleCloseNavMenu(route, page)}
                  sx={{
                    ":hover": {
                      backgroundColor: "#fcebf2",
                    },
                    backgroundColor:
                      selectedButton === page ? "#fff5d7" : undefined,
                  }}
                >
                  <Typography sx={{ textAlign: "center", color: "#4b5945" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ route, page }) => (
              <Button
                key={page}
                onClick={() => handleClick(route, page)}
                sx={{
                  my: 2,
                  color: "#4b5945",
                  display: "block",
                  ":hover": {
                    backgroundColor: "#fcebf2",
                  },
                  backgroundColor:
                    selectedButton === page ? "#fff5d7" : undefined,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
