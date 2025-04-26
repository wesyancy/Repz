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
import Logo         from '../assets/logo.png';
import adddumbbell  from '../assets/icons/addexercise.png';
import dumbbell     from '../assets/icons/currentworkout.png';
import addworkout   from '../assets/icons/buildworkout.png';
import folder       from '../assets/icons/workouts.png';
import profile      from '../assets/icons/profile.png';
import feedback     from '../assets/icons/feedback.png';

export default function SidebarSlim() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: 50,
                    // marginRight: 240,
                    boxSizing: 'border-box',
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                },
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'auto',
                }}>
                <NavLink
                    to="/"
                    style={{ textDecoration: 'none', color: 'inherit', letterSpacing: '2px', fontStyle: 'italic' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 1,
                        }}>
                        <img
                            src={Logo}
                            alt="LoadUP Logo"
                            style={{
                                height: 36,
                                // marginRight: 8,
                                borderRadius: '8px',
                            }}
                        />
                        {/* <Typography variant="h5" noWrap>
                            LoadUP
                        </Typography> */}
                    </Box>
                </NavLink>

                <Box sx={{ flexGrow: 1 }}>
                    <List>
                        {[
                            {
                                to: '/currentworkout',
                                icon: dumbbell,
                                label: 'Current Workout',
                            },
                            {
                                to: '/workouts',
                                icon: folder,
                                label: 'Workouts',
                            },
                            {
                                to: '/addexercise',
                                icon: adddumbbell,
                                label: 'Add Exercise',
                            },
                            {
                                to: '/buildworkout',
                                icon: addworkout,
                                label: 'Build Workout',
                            },
                        ].map((item) => (
                            <ListItem
                                key={item.to}
                                component={NavLink}
                                to={item.to}
                                sx={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    '&.active': {
                                        backgroundColor: 'action.selected',
                                    },
                                    '&:hover': {
                                        backgroundColor: '#555'
                                    }
                                }}>
                                <ListItemIcon>
                                    <img
                                        src={item.icon}
                                        alt="sidebar icon"
                                        style={{ height: 30 }}
                                    />
                                </ListItemIcon>
                                {/* <ListItemText primary={item.label} /> */}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <List>
                    {[
                        {
                            to: '/profile',
                            icon: profile,
                            label: 'Profile & Stats',
                        },
                        { to: '/feedback', icon: feedback, label: 'Feedback' },
                    ].map((item) => (
                        <ListItem
                            key={item.to}
                            component={NavLink}
                            to={item.to}
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                '&.active': {
                                    backgroundColor: 'action.selected',
                                },
                            }}>
                            <ListItemIcon>
                                <img
                                    src={item.icon}
                                    alt="sidebar icon"
                                    style={{ height: 30 }}
                                />
                            </ListItemIcon>
                            {/* <ListItemText primary={item.label} /> */}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}
