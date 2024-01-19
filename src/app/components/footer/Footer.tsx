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
                <Link style={{textDecoration:"none", color:"inherit"}} href={"https://d-studio.vercel.app/"} target='_blank'>
                    <Typography fontFamily={'Rubik Variable, sans-serif'} variant="body1">
                        Copyrights © D STUDIO | All rights Reserved
                    </Typography>
                </Link>
            </Box>
        </footer>
    );
}

export default Footer;