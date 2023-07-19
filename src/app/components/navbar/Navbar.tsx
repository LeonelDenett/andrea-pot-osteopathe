'use client'

// Next
import { useState } from 'react';
// Mui Components
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyDrawer from '../drawer/Drawer';

function Navbar() {
    const [open, setOpen] = useState(false)

    const handleOpen = (index: number) => {
        setOpen(true);
        console.log("open")
    };
    
    const handleClose = () => {
        setOpen(false);
        console.log("close")
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button onClick={handleOpen} color="inherit">Login</Button>
                    <MyDrawer open={open} onClose={handleClose} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Navbar;