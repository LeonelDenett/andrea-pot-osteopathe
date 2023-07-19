import Image from 'next/image'
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
// Components
import Navbar from './components/navbar/Navbar';

export default function Home() {
  return (
    <Box>
      <header>
        <Navbar/>
      </header>
    </Box>
  )
}
