import './sidebar.css';
import { NavLink } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Box,
    ListItemIcon,
} from '@mui/material';
import Logo from '../assets/logo.png'; // adjust path if needed
import adddumbbell from '../assets/icons/addexercise.png';
import dumbbell from '../assets/icons/currentworkout.png';
import addworkout from '../assets/icons/buildworkout.png';
import folder from '../assets/icons/workouts.png';
import profile from '../assets/icons/profile.png';
import feedback from '../assets/icons/feedback.png';

export default function Sidebar() {
    return (
        <Drawer variant="permanent" className="sidebar-drawer">
            <Box
                className="sidebar-box"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}>
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
                        <Typography variant="h5" noWrap>
                            LoadUP
                        </Typography>
                    </Box>
                </NavLink>
                <Box sx={{ flexGrow: 1 }}>
                    <List>
                        <ListItem
                            button
                            component={NavLink}
                            to="/currentworkout"
                            className="sidebar-listitem">
                            <ListItemIcon>
                                <img
                                    src={dumbbell}
                                    alt="sidebar icon"
                                    className="sidebar-item-icon"
                                />
                            </ListItemIcon>
                            <ListItemText primary="Current Workout" />
                        </ListItem>
                        <ListItem
                            button
                            component={NavLink}
                            to="/workouts"
                            className="sidebar-listitem">
                            <ListItemIcon>
                                <img
                                    src={folder}
                                    alt="sidebar icon"
                                    className="sidebar-item-icon"
                                />
                            </ListItemIcon>
                            <ListItemText primary="Workouts" />
                        </ListItem>
                        <ListItem
                            button
                            component={NavLink}
                            to="/addexercise"
                            className="sidebar-listitem">
                            <ListItemIcon>
                                <img
                                    src={adddumbbell}
                                    alt="sidebar icon"
                                    className="sidebar-item-icon"
                                />
                            </ListItemIcon>
                            <ListItemText primary="Add Exercise" />
                        </ListItem>
                        <ListItem
                            button
                            component={NavLink}
                            to="/buildworkout"
                            className="sidebar-listitem">
                            <ListItemIcon>
                                <img
                                    src={addworkout}
                                    alt="sidebar icon"
                                    className="sidebar-item-icon"
                                />
                            </ListItemIcon>
                            <ListItemText primary="Build Workout" />
                        </ListItem>
                    </List>
                </Box>
                <List>
                    <ListItem
                        button
                        component={NavLink}
                        to="/profile"
                        className="sidebar-listitem">
                        <ListItemIcon>
                            <img
                                src={profile}
                                alt="sidebar icon"
                                className="sidebar-item-icon"
                            />
                        </ListItemIcon>
                        <ListItemText primary="Profile & Stats" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/feedback"
                        className="sidebar-listitem">
                        <ListItemIcon>
                            <img
                                src={feedback}
                                alt="sidebar icon"
                                className="sidebar-item-icon"
                            />
                        </ListItemIcon>
                        <ListItemText primary="Feedback" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
