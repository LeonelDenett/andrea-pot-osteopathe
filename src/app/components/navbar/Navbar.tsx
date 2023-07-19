'use client'

// Next
import { useState } from 'react';
// Style
import styles from './Navbar.module.css'
// Mui Components
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyDrawer from '../drawer/Drawer';
import { Typography } from '@mui/material';

function Navbar() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
        console.log("open")
    };
    
    const handleClose = () => {
        setOpen(false);
        console.log("close")
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.navbar}>
                <Toolbar className={styles.toolbar}>
                    <Typography>Andrea</Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleOpen}
                        className={styles.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <MyDrawer open={open} onClose={handleClose} />
        </Box>
    );
}


export default Navbar;