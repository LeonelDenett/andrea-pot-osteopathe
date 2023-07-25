// Next
import Image from 'next/image';
// Styles
import styles from './logo.module.css';
// Mui Components
import Box from '@mui/material/Box';
// Image
import logo from '../../images/logo.jpeg'

function Logo() {
    return (
        <Box>
            <Image src={logo} alt="Logo" className={styles.img} />
        </Box>
    );
}

export default Logo;