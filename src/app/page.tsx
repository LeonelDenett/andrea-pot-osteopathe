// Next
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";
// Styles
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
// Image
import reservation from "./images/reservation.jpeg";
import localisation from "./images/localisation.jpeg";
import andrea from './images/andrea.jpeg';
import osteopathie from './images/osteopathie.jpeg';
// Components
import Logo from './components/logo/Logo';


export default function Home() {
    const overlay = styles.overlay;
    const data = [
        {img: reservation, url: "/reservation", title: "Prendre RDV"},
        {img: localisation, url: "/localisation", title: "Adresse & Contact"},
        {img: andrea, url: "/andrea", style: {}, styles: "objectPosition: 'center calc(50% + 3.5rem)'", title: "Andréa Pot",},
        {img: osteopathie, url: "/osteopathie", title: "Ostéopathie"},
    ];
    const siteUrl = "https://andrea-pot-osteopathe.vercel.app/"

    return (
        <main>
            <Head>
                <title>Andréa Pot - Ostéopathe à Plounéour-Brignogan-Plages</title>
                <meta name="description" content="Andréa Pot, ostéopathe D.O à Maison médicale de la Baie. Spécialisée dans le traitement et la prévention des troubles musculo-squelettiques." />
                <meta name="keywords" content="Andréa Pot, ostéopathe, Maison médicale de la Baie, Plounéour-Brignogan-Plages, traitement musculo-squelettique, prévention santé" />
                <meta property="og:title" content="Andréa Pot - Ostéopathe à Plounéour-Brignogan-Plages" />
                <meta property="og:description" content="Andréa Pot, ostéopathe D.O à Maison médicale de la Baie. Spécialisée dans le traitement et la prévention des troubles musculo-squelettiques." />
                <meta property="og:image" content={`${siteUrl}/images/logo.jpeg`} />
                <meta property="og:url" content="https://andrea-pot-osteopathe.vercel.app/localisation" />
            </Head>
            <Box className={styles.main}>
                <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    {/* Presentation Section*/}
                    <Grid item xs={12} lg={6}>
                        <section>
                            <Box className={styles.presentation}>
                                {/* Logo */}
                                <Logo/>
                                {/* Presentation */}
                                <Typography component="h1" variant="h1" fontWeight={400} className={styles.name}>Andréa Pot</Typography>
                                <Typography component="h2" variant="h2" className={styles.name}>Ostéopathe D.O</Typography>
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
                                                <CardMedia className={styles.cardMedia}>
                                                    <Image src={item.img} alt="Slide" className={styles.image} />
                                                    <Box className={styles.titleContainer}>
                                                        <Typography variant="h4" className={styles.title}>{item.title}</Typography>
                                                    </Box>
                                                    <Box className={overlay}></Box>
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
            </Box>
        </main>
    )
}
