// NextJs
import Link from 'next/link';
// Styles
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Navbar from '@/app/components/navbar/Navbar';
import Logo from '@/app/components/logo/Logo';

function Localisation() {
    return (
        <main>
            <Box className={styles.main}>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <section>
                            {/* Logo */}
                            <Logo/>
                            {/* Title */}
                            <Box className={styles.title}>
                                <Typography component='h1' variant="h1">Localisation</Typography>
                            </Box>
                            <Paper elevation={4} className={styles.paper}>
                                <Box className={styles.informations}>
                                    <Box className={styles.data}>
                                        <Typography fontWeight={600}>Adresse :</Typography>
                                        <Typography>Maison médicale de la Baie,<br/> Z.A La Gare,<br/> 29890 Plounéour-Brignogan-Plages</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </section>
                    </Grid>
                </Grid>
                
                    
            </Box>
        </main>
    );
}

export default Localisation;