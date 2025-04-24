import './sidebar.css';
import { NavLink } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Toolbar,
    Box,
} from '@mui/material';
import Logo from '../assets/logo.png'; // adjust path if needed
import { useState } from 'react';

export default function Sidebar() {
    let [count, setCount] = useState(0);

    const appHack = () => {
        setCount((count += 1));
        console.log(`You have been hacked ${count} times`);
    };
    return (
        <Drawer variant="permanent" className="sidebar-drawer">
            <Toolbar />
            <Box className="sidebar-box">
                <NavLink to="/" className="sidebar-navlink">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 2,
                        }}>
                        <img
                            src={Logo}
                            alt="Form Lab Logo"
                            className="sidebar-logo"
                        />
                        <Typography variant="h3" noWrap>
                            FL
                        </Typography>
                    </Box>
                </NavLink>
                <List>
                    <ListItem
                        button
                        component={NavLink}
                        to="/currentworkout"
                        className="sidebar-listitem"
                        onClick={() => appHack()}>
                        <ListItemText primary="Current Workout" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/workouts"
                        className="sidebar-listitem"
                        onClick={() => appHack()}>
                        <ListItemText primary="Workouts" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/buildworkout"
                        className="sidebar-listitem"
                        onClick={() => appHack()}>
                        <ListItemText primary="Build Workout" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/profile"
                        className="sidebar-listitem"
                        onClick={() => appHack()}>
                        <ListItemText primary="Profile & Stats" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
