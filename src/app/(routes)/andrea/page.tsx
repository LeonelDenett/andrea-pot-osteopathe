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

function Andrea() {
    return (
        <main>
            <Box className={styles.main}>
                <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{paddingX: {xs:"1rem",sm:"3rem",md:"5rem", lg:"15rem"}}}>
                    {/* Studies & Diplomes */}
                    <Grid item xs={12} lg={6} sx={{backgroundColor:"#ebe8de", borderRadius:"2rem"}} my={2}>
                        <Box className={styles.photoContainer}>
                            <Paper elevation={8} className={styles.photo}>
                                <Image alt="Andrea" src={photoProfile} fill />
                            </Paper>
                        </Box>
                        <Box className={styles.titleContainer}>
                            <Typography component='h1' variant='h2'>Andréa Pot</Typography>
                            <Typography component="h2" variant='h3' fontWeight={300}>Ostéopathe D.O</Typography>
                        </Box>
                        <Box className={styles.studiesContainer}>
                            <Paper elevation={8} className={styles.studies}>
                                <Typography>
                                    2023 : Diplômée de l’institut d’Ostéopathie de Rennes-Bretagne
                                </Typography><br/>
                                <Typography color="#ffb4ac">Mémoire de fin d’étude : État des lieux des connaissances
                                    scientifiques des interrelations entre l’intestin et le cerveau
                                    impliquées dans la dépression et l’anxiété. Quelles perspectives
                                    pour l’ostéopathie ?
                                </Typography><br/>
                                <Typography>
                                    2023 – 2024 (en cours) : Diplôme universitaire Nutrition
                                    Micronutrition Exercice et Santé à Poitiers.
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

export default Andrea;