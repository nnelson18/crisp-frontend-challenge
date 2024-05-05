import ChecklistIcon from "@mui/icons-material/Checklist";
import { AppBar, Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ChecklistIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: "bold",
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              Todo
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Button
              sx={{
                my: 2,
                color: "#20332C",
                display: "block",
                fontWeight: 600,
              }}
              color="inherit"
              component={RouterLink}
              to="/"
            >
              Tasks
            </Button>
            <Button
              sx={{
                my: 2,
                color: "#20332C",
                display: "block",
                fontWeight: 600,
              }}
              color="inherit"
              component={RouterLink}
              to="/metrics"
            >
              Metrics
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
