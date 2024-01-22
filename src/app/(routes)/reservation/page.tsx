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
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const principalHours = ['8h-20h', '/', '8h-20h', '/', '8h-20h', '8h-14h'];
    const secondaryHours = ['/', '16h-21h', '/', '7h30-12h30 / 16h-21h', '/', '/'];

    
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
                            <Link href='https://www.doctolib.fr/osteopathe/plouneour-brignogan-plages/andrea-pot-plouneour-brignogan-plages/booking/places?specialityId=10&telehealth=false' target='_blank' className={styles.link}>
                                <Button className={styles.doctoLibContainer}>
                                    <Box component={Paper} elevation={8} className={styles.doctoLib}>
                                        {/* <Typography variant="h3" fontWeight={300}>DoctoLib</Typography> */}
                                        <img style={{height:"48px", width:"auto" }}
                                        src="https://www.doctolib.fr/external_button/doctolib-white-transparent.png" alt="Doctolib"/>
                                    </Box>
                                </Button>
                            </Link>
                        </Box>
                        {/* Button Phone */}
                        <Box className={styles.center} sx={{flexDirection:"column"}}>
                            <Box component={Paper} elevation={8} className={styles.phoneIcon}>
                                <Button sx={{ textTransform: 'none', width:"100%" }}>
                                    <Typography fontSize={46} fontWeight={700} color="#ebe8de" fontFamily={'Dancing Script Variable, sans-serif'} >Appeler</Typography>
                                    <PhoneIcon sx={{color:"#ebe8de"}} fontSize="large" />
                                </Button>
                            </Box>
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
                                    <Paper elevation={2} className={styles.informations} sx={{display: {lg:"none"}, mt: 2, width:"100%"}}>
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
                                            <Typography fontWeight={600} sx={{textDecoration:"underline"}}>Téléphone : </Typography>
                                            <Typography>07 60 31 39 17</Typography>
                                        </Box>
                                        <Grid container spacing={0} sx={{paddingX:"2.6rem"}} justifyContent={"center"}>
                                            <Grid item xs={5}>
                                                <Box>
                                                    <Typography fontWeight={600} sx={{textDecoration:"underline"}}>Adresse Principale: </Typography>
                                                    <Typography>Maison de santé de la baie</Typography>
                                                    <Typography>6 Z.A de La Gare</Typography>
                                                    <Typography>Route de Kerlouan</Typography>
                                                    <Typography>29890 Plounéour-Brignogan-Plages</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sx={{height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                                <Divider flexItem sx={{backgroundColor: "#ebe8de", width:"2px"}} orientation="vertical" />
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Box>
                                                    <Typography fontWeight={600} sx={{textDecoration:"underline"}}>Adresse de collaboration:</Typography>
                                                    <Typography>2 Rue Xavier Grall</Typography>
                                                    <Typography>29800 Ploudiry</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                                {/* Itinerary */}
                                <Box className={styles.itineraryContainer} sx={{display: {xs:"none", lg:"inline"}}}>
                                    <Paper elevation={2} className={styles.paper}>
                                        <Box className={styles.itinerary}>
                                            {/* Principal Hours */}
                                            <Grid container spacing={0} sx={{paddingX:"0rem"}} justifyContent={"center"}>
                                                <Grid item xs={5} display={"flex"} gap={4} justifyContent={"center"} alignItems={"center"}>
                                                    <Box>
                                                    {
                                                        days.map((day, index) => (
                                                            <Box className={styles.itineraryData} key={index}>
                                                                <Typography fontWeight={600}>{day}</Typography>
                                                            </Box>
                                                        ))
                                                    }
                                                    </Box>
                                                    <Box sx={{textAlign:"center"}}>
                                                    {
                                                        principalHours.map((hour, index) => (
                                                            <Box className={styles.itineraryData} key={index}>
                                                                <Typography>{hour}</Typography>
                                                            </Box>
                                                        ))
                                                    }
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={2} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                                    <Divider flexItem sx={{backgroundColor: "#ebe8de", width:"2px"}} orientation="vertical" />
                                                </Grid>
                                                <Grid item xs={5} display={"flex"} gap={4} justifyContent={"center"} alignItems={"center"}>
                                                    <Box>
                                                    {
                                                        days.map((day, index) => (
                                                            <Box className={styles.itineraryData} key={index}>
                                                                <Typography fontWeight={600}>{day}</Typography>
                                                            </Box>
                                                        ))
                                                    }
                                                    </Box>
                                                    <Box sx={{textAlign:"center"}}>
                                                    {
                                                        secondaryHours.map((hour, index) => (
                                                            <Box className={styles.itineraryData} key={index}>
                                                                <Typography>{hour}</Typography>
                                                            </Box>
                                                        ))
                                                    }
                                                    </Box>
                                                </Grid>
                                            </Grid>
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
                                            - Consultation en entreprise<br/>
                                            - Consultation à domicile
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