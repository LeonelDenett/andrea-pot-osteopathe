// Next
import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// Image
import logo from "./images/logo.jpeg";
import reservation from "./images/reservation.jpeg";
import localisation from "./images/localisation.jpeg";
import andrea from './images/andrea.jpeg';
import osteopathie from './images/osteopathie.jpeg';
import Logo from './components/logo/Logo';


export default function Home() {
    const definidio = styles.overlayReservation
    const data = [
        {img: reservation, url: "/reservation", style: definidio, title: "Prendre RDV"},
        {img: localisation, url: "/localisation", style: definidio, title: "Adresse & Contact"},
        {img: andrea, url: "/andrea", style: definidio, title: "Andréa Pot"},
        {img: osteopathie, url: "/osteopathie", style: definidio, title: "Ostéopathie"},
    ]
    return (
        <Box>
            <main className={styles.main}>
                <Grid container>
                    {/* Presentation Section*/}
                    <Grid item xs={12} lg={6}>
                        <section>
                            <Box className={styles.presentation}>
                                <Logo/>
                                <Typography component="h1" variant="h1" fontWeight={400} className={styles.title}>Andréa Pot</Typography>
                                <Typography component="h2" variant="h2" className={styles.title}>Ostéopathe D.O</Typography>
                                <Typography component="p" variant="body2" className={styles.subtitle}>Des doigts qui pensent, sentent, voient et savent</Typography>
                            </Box>
                        </section>
                    </Grid>
                    {/* Slides */}
                    <Grid item xs={12} lg={6} mb={2}>
                        <Grid container rowSpacing={2}>
                            {/* Reservation Section */}
                            {data.map((item, index) => (
                                <Grid item xs={12} lg={6} key={index}>
                                    <section>
                                    <Card className={styles.card}>
                                        <CardActionArea>
                                            <Link href={item.url}>
                                                <CardMedia className={styles.reservationCardMedia}>
                                                    <Image src={item.img} alt="Reservation" className={styles.reservationImage} />
                                                    <Box className={styles.titleReservationContainer}>
                                                        <Typography variant="h4" className={styles.titleReservation}>{item.title}</Typography>
                                                    </Box>
                                                    <Box className={definidio}></Box>
                                                </CardMedia>
                                            </Link>
                                        </CardActionArea>
                                    </Card>
                                    </section>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        </Box>
    )
}
