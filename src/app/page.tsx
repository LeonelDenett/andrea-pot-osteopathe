// Next
import Image from 'next/image'
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
// Components
import Navbar from './components/navbar/Navbar';
import MyDrawer from './components/drawer/Drawer';
// Image
import logo from "./images/logo.jpeg"

export default function Home() {
    return (
        <Box>
            <header>
                <Navbar/>
            </header>
            <main className={styles.main}>
                {/* Presentation Section*/}
                <section>
                    <Box className={styles.presentation}>
                        <Image src={logo} alt="Logo" />
                        <Typography component="h1" variant="h1" fontWeight={400} className={styles.title}>Andréa Pot</Typography>
                        <Typography component="h1" variant="h2" className={styles.title}>Osthéopathe</Typography>
                        <Typography component="p" variant="body2" className={styles.title}>"Des doigts qui pensent, sentent, voient et savent"</Typography>
                    </Box>
                </section>
                {/* Reservation Section */}
            </main>
        </Box>
    )
}
