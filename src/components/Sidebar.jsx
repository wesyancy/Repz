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
// import adddumbbell  from '../assets/icons/addexercise.png';
import dumbbell     from '../assets/icons/currentworkout.png';
import addworkout   from '../assets/icons/buildworkout.png';
import folder       from '../assets/icons/workouts.png';
import profile      from '../assets/icons/profile.png';
import feedback     from '../assets/icons/feedback.png';
import { useState } from 'react';
import { useTheme, useMediaQuery, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(true);
    const collapsed = isMobile || !open;
    const drawerWidth = 240;
    const collapsedWidth = theme.spacing(10);

    return (
        <Drawer
            variant="permanent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: collapsed ? collapsedWidth : drawerWidth,
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    height: '100vh',
                },
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'auto',
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', pl: 2, pt: 1, pb: 1 }}>
                    <IconButton onClick={() => setOpen(o => !o)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <NavLink
                    to="/"
                    style={{ textDecoration: 'none', color: 'inherit', letterSpacing: '2px', fontStyle: 'italic' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 2,
                        }}>
                        <img
                            src={Logo}
                            alt="LoadUP Logo"
                            style={{
                                height: 48,
                                marginRight: 8,
                                borderRadius: '8px',
                            }}
                        />
                        {!collapsed && (
                          <Typography variant="h5" noWrap>
                            LoadUP
                          </Typography>
                        )}
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
                            // {
                            //     to: '/addexercise',
                            //     icon: adddumbbell,
                            //     label: 'Add Exercise',
                            // },
                            {
                                to: '/templates',
                                icon: folder,
                                label: 'Templates',
                            },
                            {
                                to: '/buildtemplate',
                                icon: addworkout,
                                label: 'Build Template',
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
                                <ListItemIcon sx={{ justifyContent: 'center', minWidth: 0 }}>
                                    <img
                                        src={item.icon}
                                        alt="sidebar icon"
                                        style={{ height: 48, marginRight: 10 }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                  primary={item.label}
                                  sx={{ display: collapsed ? 'none' : 'block' }}
                                />
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
                            <ListItemIcon sx={{ justifyContent: 'center', minWidth: 0 }}>
                                <img
                                    src={item.icon}
                                    alt="sidebar icon"
                                    style={{ height: 48, marginRight: 10 }}
                                />
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              sx={{ display: collapsed ? 'none' : 'block' }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}
