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
// Image
import osteopathie from '../../images/osteopathie.jpeg'


function Osteopathie() {
    return (
        <main>
            <Box className={styles.main}>
                <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2} sx={{paddingX: {xs:"1rem",sm:"3rem",md:"5rem", lg:"10rem", xl:"20rem"}}}>
                    {/* Studies & Diplomes */}
                    <Grid item xs={12} lg={6}>
                        <section>
                            {/* Logo */}
                            <Logo/>
                            <Box className={styles.title}>
                                <Typography component='h1' variant='h2'>L&apos;ostéopathie, c&apos;est quoi ?</Typography>
                            </Box>
                        </section>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <section>
                            <Box className={styles.osteopathieContainer}>
                                <Paper elevation={8} className={styles.osteopathie}>
                                    <Typography variant='h6' fontWeight={400}>
                                        L&apos;ostéopathie est une médecine manuelle alternative qui permet de diminuer des douleurs
                                        d&apos;origine fonctionnelle.<br/> Elle est complémentaire de la médecine traditionnelle.<br/>
                                        L&apos;ostéopathe prend le temps d&apos;analyser l&apos;organisation globale du corps du patient,
                                        et ainsi essayer de comprendre l&apos;origine de sa douleur.<br/>
                                        Les techniques réalisées sur le système musculosquelettique et myofacial du patient
                                        l&apos;aident à enclencher les différents mécanismes
                                        d&apos;autoguérison du corps et à redonner de la mobilité à certaines zones corporelles.
                                    </Typography>
                                </Paper>
                            </Box>
                        </section>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

export default Osteopathie;