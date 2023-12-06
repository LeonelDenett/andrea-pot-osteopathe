// NextJs
import Link from 'next/link';
// Styles
import styles from './Footer.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <footer>
            <Box className={styles.footer}>
                <Link style={{textDecoration:"none", color:"inherit"}} href={"https://d-studio.vercel.app/"} target='_blank'>Copyrights © D STUDIO | All rights Reserved</Link>
            </Box>
        </footer>
    );
}

export default Footer;