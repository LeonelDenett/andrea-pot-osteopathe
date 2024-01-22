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
import Divider from '@mui/material/Divider';

function Localisation() {
    return (
        <main>
            <Box className={styles.main}>
                <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2} sx={{paddingX: {xs:"1rem",sm:"3rem",md:"5rem"}, paddingBottom: "1rem"}}>
                    <Grid item xs={12} lg={6}>
                        <section>
                            {/* Logo */}
                            <Logo/>
                            {/* Title */}
                            <Box className={styles.title} sx={{marginBottom: {xs:".5rem", md: 0}}}>
                                <Typography component='h1' variant="h2">Adresses</Typography>
                            </Box>
                            <Paper elevation={8} sx={{borderRadius: "1rem"}}>
                            <Grid container className={styles.informations}>
                                <Grid item xs={6}>
                                    <Box>
                                        <Typography fontWeight={600} sx={{textDecoration:"underline"}}>Adresse Principale: </Typography>
                                        <Typography>Maison de santé de la baie</Typography>
                                        <Typography>6 Z.A de La Gare</Typography>
                                        <Typography>Route de Kerlouan</Typography>
                                        <Typography>29890 Plounéour-Brignogan-Plages</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box>
                                        <Typography fontWeight={600} sx={{textDecoration:"underline"}}>Adresse de collaboration:</Typography>
                                        <Typography>2 Rue Xavier Grall</Typography>
                                        <Typography>29800 Ploudiry</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            </Paper>
                        </section>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <section>
                            <Paper elevation={8} sx={{borderRadius: "1rem"}}>
                                <Box className={styles.photoContainer} sx={{flexDirection: {xs: "column", lg: "row"}}}>
                                    <Paper elevation={4} className={styles.photoPaper}>
                                        <motion.div whileHover={{scale: 1.3}} style={{height:"100%", transition: "all .3s"}}>
                                            <Image src={adresse1} alt="adresse1" className={styles.photo} />
                                        </motion.div>
                                    </Paper>
                                    <Paper elevation={4} className={styles.photoPaper}>
                                        <motion.div whileHover={{scale: 1.3, transformOrigin: "center bottom"}} style={{height:"100%", transition: "all .3s"}}>
                                            <Image src={adresse2} alt="adresse2" className={styles.photo} />
                                        </motion.div>
                                    </Paper>
                                </Box>
                            </Paper>
                        </section>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

export default Localisation;