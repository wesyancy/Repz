import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Toolbar,
  Box,
} from "@mui/material";
import Logo from "../assets/logo.png"; // adjust path if needed

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#404040",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <img
              src={Logo}
              alt="Repz Logo"
              style={{ height: 58, marginRight: 25 }}
            />
            <Typography variant="h6" noWrap>
              Repz
            </Typography>
          </Box>
        </NavLink>
        <List>
          <ListItem
            button
            component={NavLink}
            to="/currentworkout"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&.active": { fontWeight: "bold" },
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            <ListItemText primary="Current Workout" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/workouts"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&.active": { fontWeight: "bold" },
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            <ListItemText primary="Workouts" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/buildworkout"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&.active": { fontWeight: "bold" },
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            <ListItemText primary="Build Workout" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/profile"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&.active": { fontWeight: "bold" },
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            <ListItemText primary="Profile & Stats" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
