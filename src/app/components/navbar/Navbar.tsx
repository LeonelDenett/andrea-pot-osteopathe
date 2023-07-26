'use client'

// NextJs
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Style
import styles from './Navbar.module.css';
// Mui Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Mui Icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Navbar() {
    const url = usePathname()
    const [showIcon, setShowIcon] = useState(url !== '/')

    useEffect(() => {
        // Imprimir la URL actual en la consola
        console.log('URL actual:', url);
        setShowIcon(url !== '/')
      }, [url]);

    return (
        <header>
            <AppBar position='static' className={styles.appBar}>
                <Toolbar className={styles.toolbar}>
                    <Typography color={"#5c8984"}>Andréa Pot - Ostéopathe</Typography>
                    {
                        showIcon &&
                        <Link href='/'>
                            <IconButton>
                                <KeyboardBackspaceIcon fontSize='large' sx={{color:"#5c8984"}} />
                            </IconButton>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
        </header>
    );
}


export default Navbar;