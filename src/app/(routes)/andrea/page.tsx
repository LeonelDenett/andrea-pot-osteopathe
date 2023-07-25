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
import photoProfile from '../../images/andrea.jpeg';
import Logo from '@/app/components/logo/Logo';

function Andrea() {
    return (
        <main>
            <Box className={styles.main}>
                <Grid container>
                    {/* Logo & Profile */}
                    <Grid item xs={12} lg={6}>
                        <section>
                            <Logo/>
                            <Box className={styles.photoContainer}>
                                <Paper elevation={8} className={styles.photo}>
                                    <Image alt="Andrea" src={photoProfile} fill />
                                </Paper>
                            </Box>
                            <Box className={styles.titleContainer}>
                                <Typography component='h1' variant='h1'>Andréa Pot</Typography>
                                <Typography component="h2"  variant='h2'>Ostéopathe D.O</Typography>
                            </Box>
                        </section>
                    </Grid>
                    {/* Studies & Diplomes */}
                    <Grid item xs={12} lg={6}>
                        <Grid container>
                            <Grid item>
                                <Paper elevation={8} className={styles.studies}>
                                    <Box>
                                        <Typography>
                                            2023 : Diplômée de l’institut d’Ostéopathie de Rennes-Bretagne<br/>
                                            Mémoire de fin d’étude : État des lieux des connaissances
                                            scientifiques des interrelations entre l’intestin et le cerveau
                                            impliquées dans la dépression et l’anxiété. Quelles perspectives
                                            pour l’ostéopathie ?<br/><br/>

                                            2023 – 2024 (en cours) : Diplôme universitaire Nutrition
                                            Micronutrition Exercice et Santé à Poitiers.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

export default Andrea;