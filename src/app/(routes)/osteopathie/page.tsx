// NextJs
import Image from 'next/image';
// Styles
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Components
import Logo from '@/app/components/logo/Logo';
// Images
import osteopathie from '../../images/osteopathie.jpeg';


function Osteopathie() {
    return (
        <main>
            <Box className={styles.main}>
                <Grid container>
                    {/* Studies & Diplomes */}
                    <Grid item xs={12} lg={6}>
                        <section>
                            {/* Logo */}
                            <Logo/>
                            <Box className={styles.title}>
                                <Typography component='h1' variant='h1'>L'ostéopathie, c'est quoi ?</Typography>
                            </Box>
                            <Paper elevation={8} className={styles.osteopathie}>
                                <Box className={styles.osteopathieContainer}>
                                    <Typography variant='h6' fontWeight={400}>
                                        L’ostéopathie est une médecine manuelle alternative qui permet de diminuer des douleurs
                                        d’origine fonctionnelle.<br/> Elle est complémentaire de la médecine traditionnelle.<br/>
                                        L’ostéopathe prend le temps d'analyser l’organisation globale du corps du patient,
                                        et ainsi essayer de comprendre l'origine de sa douleur.<br/>
                                        Les techniques réalisées sur le système musculosquelettique et myofacial du patient
                                        l'aident à enclencher les différents mécanismes
                                        d’autoguérison du corps et à redonner de la mobilité à certaines zones corporelles.
                                    </Typography>
                                </Box>
                            </Paper>
                        </section>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

export default Osteopathie;