import Image from 'next/image'
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
// Components
import Navbar from './components/navbar/Navbar';
import MyDrawer from './components/drawer/Drawer';

export default function Home() {
    return (
        <Box>
            <header>
                <Navbar/>
            </header>
            <main className={styles.main}>
                <Box className={styles.presentation}>
                    <Typography component="h1">Andrea Pot - Ostheopathe</Typography>
                </Box>
            </main>
        </Box>
    )
}
