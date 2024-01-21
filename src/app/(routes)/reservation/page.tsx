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
            <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{paddingX: {xs:"1rem",sm:"3rem",md:"5rem", lg:"10rem"}}}>
                {/* Dashboard */}
                <Grid item xs={12} lg={6} sx={{backgroundColor:'#5c8984'}}>
                    <section>
                        {/* Logo */}
                        <Logo/>
                        {/* Title */}
                        <Box className={styles.title}>
                            <Typography component='h1' variant="h2">Prendre RDV</Typography>
                        </Box>
                        {/* DoctoLib */}
                        <Box className={styles.center}>
                            <Link href='https://www.doctolib.fr/osteopathe/plouneour-brignogan-plages/andrea-pot-plouneour-brignogan-plages?pid=practice-465302&agenda_ids%5B%5D=1368561' target='_blank' className={styles.link}>
                                <Button className={styles.doctoLibContainer}>
                                    <Box component={Paper} elevation={8} className={styles.doctoLib}>
                                        <Typography variant="h3" fontWeight={300}>DoctoLib</Typography>
                                    </Box>
                                </Button>
                            </Link>
                        </Box>
                    </section>
                </Grid>
                {/* Interactive Buttons & Itinerary */}
                <Grid component={Paper} elevation={8} item xs={12} lg={6} sx={{backgroundColor:'#ebe8de', borderRadius:"2rem"}} mb={2}>
                    <Grid container pl={2} pr={2}>
                        <Grid item xs={12}>
                            <section>
                                {/* Icons */}
                                <Box className={styles.interactiveContainer}>
                                    <Box className={styles.interactiveButtons} sx={{display: {lg:"none"}}}>
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
                                    <Paper elevation={4} className={styles.informations} sx={{display: {lg:"none"}}}>
                                        <Box>
                                            <Typography>Adresse : </Typography>
                                            <Typography>Maison de santé de la baie</Typography>
                                            <Typography>6 Z.A de La Gare</Typography>
                                            <Typography>Route de Kerlouan</Typography>
                                            <Typography>29890 Plounéour-Brignogan-Plages</Typography>
                                        </Box>
                                    </Paper>
                                </Box>
                                {/* Informations */}
                                <Box sx={{display: {xs:"none", lg:"flex"}, marginTop: "1rem"}} className={styles.informationsContainer}>
                                    <Paper elevation={8} className={styles.informations}>
                                        <Box>
                                            <Typography>Téléphone : </Typography>
                                            <Typography>07 60 31 39 17</Typography>
                                        </Box>
                                        <Box>
                                            <Typography>Adresse : </Typography>
                                            <Typography>Maison de santé de la baie</Typography>
                                            <Typography>6 Z.A de La Gare</Typography>
                                            <Typography>Route de Kerlouan</Typography>
                                            <Typography>29890 Plounéour-Brignogan-Plages</Typography>
                                        </Box>
                                    </Paper>
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
                        <Grid item xs={12}>
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