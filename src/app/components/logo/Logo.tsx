// Next
import Image from 'next/image';
// Styles
<<<<<<< HEAD
import styles from './Logo.module.css';
=======
import styles from './logo.module.css';
>>>>>>> 104d3f4807371714289978b18c92f7a7f72745a4
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