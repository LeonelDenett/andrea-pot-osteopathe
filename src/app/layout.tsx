// NextJs
import Head from "next/head";
// Mui Components
import Box from '@mui/material/Box';
// Components
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './globals.css'
// Theme
import ThemeRegistry from './utils/theme/theme';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = "https://andrea-pot-osteopathe.vercel.app/"

export const metadata: Metadata = {
  title: 'Andréa Pot - Ostéopathe',
  description: 'Andréa Pot, ostéopathe D.O à Maison médicale de la Baie. Spécialisée dans le traitement et la prévention des troubles musculo-squelettiques.',
  keywords: 'Andréa Pot, ostéopathe, Maison médicale de la Baie, Plounéour-Brignogan-Plages, traitement musculo-squelettique, prévention santé',
  openGraph: {
    title: 'Andréa Pot - Ostéopathe',
    description: 'Andréa Pot, ostéopathe D.O à Maison médicale de la Baie. Spécialisée dans le traitement et la prévention des troubles musculo-squelettiques.',
    images: `${siteUrl}/images/logo.jpeg`,
    url: 'https://andrea-pot-osteopathe.vercel.app/'
  }
  // ogTitle: 'Andréa Pot - Ostéopathe à Plounéour-Brignogan-Plages',
  // ogDescription: 'Andréa Pot, ostéopathe D.O à Maison médicale de la Baie. Spécialisée dans le traitement et la prévention des troubles musculo-squelettiques.',
  // ogImage: `${siteUrl}/images/logo.jpeg`,
  // ogUrl: 'https://andrea-pot-osteopathe.vercel.app/localisation'
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Navbar/>
            {children}
          <Footer/>
        </body>
      </ThemeRegistry>
    </html>
  );
}
