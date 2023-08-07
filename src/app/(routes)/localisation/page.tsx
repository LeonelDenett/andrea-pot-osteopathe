'use client'
// NextJs
import Image from 'next/image';
// Styles
import styles from './page.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Logo from '@/app/components/logo/Logo';
// Framer Motion
import { motion } from "framer-motion"
// Photos
import adresse1 from "@/app/images/adresse1.jpeg";
import adresse2 from "@/app/images/adresse2.jpeg";

function Localisation() {
    return (
        <main>
            <Box className={styles.main}>
                <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2} sx={{paddingX: {xs:"1rem",sm:"3rem",md:"5rem", lg:"10rem", xl:"20rem"}}}>
                    <Grid item xs={12} lg={6}>
                        <section>
                            {/* Logo */}
                            <Logo/>
                            {/* Title */}
                            <Box className={styles.title}>
                                <Typography component='h1' variant="h2">Localisation</Typography>
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
                    <Grid item xs={12} lg={6}>
                        <section>
                            <Box className={styles.photoContainer} sx={{flexDirection: {xs: "column", lg: "row"}}}>
                                <Paper elevation={4} className={styles.photoPaper}>
                                    <motion.div whileTap={{scale: 1.5, transformOrigin: "top center", transition: {duration: .3}}} style={{height:"100%", transformOrigin: "top center"}}>
                                        <Image src={adresse1} alt="adresse1" className={styles.photo} />
                                    </motion.div>
                                </Paper>
                                <Paper elevation={4} className={styles.photoPaper}>
                                    <motion.div whileTap={{scale: 1.5, transition: {duration: .3}}} style={{height:"100%"}}>
                                        <Image src={adresse2} alt="adresse2" className={styles.photo} />
                                    </motion.div>
                                </Paper>
                            </Box>
                        </section>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

export default Localisation;