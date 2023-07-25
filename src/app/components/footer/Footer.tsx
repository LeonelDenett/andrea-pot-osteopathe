// Styles
import styles from './Footer.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <footer>
            <Box className={styles.footer}>
                <Typography>©2023 Andréa Pot - Ostéopathe</Typography>
            </Box>
        </footer>
    );
}

export default Footer;