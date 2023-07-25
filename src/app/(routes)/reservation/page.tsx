// NextJs
import Link from "next/link";
// Styles
import Logo from "@/app/components/logo/Logo";
import styles from "./page.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// Mui Icons
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';


function Reservation() {
    const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const hours = ['8h - 19h15', 'Fermé', '8h - 19h15', 'Fermé', '8h - 19h15', '8h - 13h'];
    return (
        <main>
        <Box className={styles.main}>
            <Grid container>
                {/* Dashboard */}
                <Grid item xs={12} lg={6}>
                    <section>
                        {/* Logo */}
                        <Logo/>
                        {/* Title */}
                        <Box className={styles.title}>
                            <Typography component='h1' variant="h1">Prendre RDV</Typography>
                        </Box>
                        {/* DoctoLib */}
                        <Box className={styles.center}>
                            <Link href='https://www.google.fr/' target='_blank' className={styles.link}>
                                <Button className={styles.doctoLibContainer}>
                                    <Box component={Paper} elevation={8} className={styles.doctoLib}>
                                        <Typography variant="h2">DoctoLib</Typography>
                                    </Box>
                                </Button>
                            </Link>
                        </Box>
                    </section>
                </Grid>
                {/* Interactive Buttons & Itinerary */}
                <Grid item xs={12} lg={6}>
                    <Grid container>
                        {/* Icons */}
                        <Grid item xs={12} lg={6} sx={{backgroundColor:"#ebe8de"}}>
                            <section>
                                <Box className={styles.interactiveContainer}>
                                    <Box className={styles.interactiveButtons}>
                                        {/* Phone Icon */}
                                        <Link href='tel:0760313917'>
                                            <Box component={Paper} elevation={4} className={styles.buttons}>
                                                <PhoneIcon fontSize='large'/>
                                            </Box>
                                        </Link>
                                        {/* Gps Icon */}
                                        <Link target='_blank' href='https://www.google.com/maps/dir//Andr%C3%A9a+Pot+Ost%C3%A9opathe,+Z.A+La+Gare+Maison+m%C3%A9dicale+de+la+Baie,+29890+Ploun%C3%A9our-Brignogan-plages/@48.6437084,-4.3355243,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4814019ee663f8d7:0xdfcd58fd0c758eb!2m2!1d-4.3351527!2d48.6436771?entry=ttu'>
                                            <Box component={Paper} elevation={4} className={styles.buttons}>
                                                <RoomIcon fontSize='large'/>
                                            </Box>
                                        </Link>
                                    </Box>
                                </Box>
                                {/* Itinerary */}
                                <Box className={styles.itineraryContainer}>
                                    <Paper elevation={4} className={styles.paper}>
                                        <Box className={styles.itinerary}>
                                            {/* Days */}
                                            <Box>
                                            {
                                                days.map((day, index) => (
                                                    <Box className={styles.itineraryData} key={index}>
                                                        <Typography>{day}</Typography>
                                                    </Box>
                                                ))
                                            }
                                            </Box>
                                            {/* Divider */}
                                            <Divider orientation='vertical' className={styles.divider} flexItem />
                                            {/* Hours */}
                                            <Box>
                                            {
                                                hours.map((hour, index) => (
                                                    <Box className={styles.itineraryData} key={index}>
                                                        <Typography>{hour}</Typography>
                                                    </Box>
                                                ))
                                            }
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Box>
                            </section>
                        </Grid>
                        {/* Patients */}
                        <Grid item xs={12} lg={6}>
                            <section>
                                <Paper elevation={4} className={styles.paper}>
                                    <Box className={styles.patients}>
                                        <Typography component='h3' variant='h6'>Qui sont mes patients?</Typography>
                                        <Typography>
                                            Mes portes sont ouvertes à tous, nourrissons, enfants, adolescents,
                                            adultes, seniors, femmes enceintes ou encore sportifs.
                                        </Typography>
                                        <Divider flexItem className={styles.dividerPatients} />
                                        <Typography>
                                            - Consultations en entreprise<br/>
                                            - Interventions en urgence
                                        </Typography>
                                    </Box>
                                </Paper>
                            </section>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        </main>
    );
}

export default Reservation;