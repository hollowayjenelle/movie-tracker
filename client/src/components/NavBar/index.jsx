import { NavLink } from "react-router";
import { Box } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      component="nav"
      sx={{
        bgcolor: "primary.main",
        padding: "20px",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/watched-movies">Watched Movies</NavLink>
      </Box>
    </Box>
  );
};

export default NavBar;
