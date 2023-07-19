// Next
import { useState } from 'react';

// Mui Components
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type MyDrawerProps = {
    open: boolean;
    onClose: () => void;
};

function MyDrawer({open, onClose} : MyDrawerProps) {
    return (
        <Box>
            <Drawer open={open} onClose={onClose}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

export default MyDrawer;