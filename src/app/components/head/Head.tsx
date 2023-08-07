import Head from "next/head";

function Metadata() {
    const siteUrl = "https://andrea-pot-osteopathe.vercel.app/"
    return (
        <Head>
            <title>Andréa Pot - Ostéopathe à Plounéour-Brignogan-Plages</title>
            <meta name="description" content="Andréa Pot, ostéopathe D.O à Maison médicale de la Baie. Spécialisée dans le traitement et la prévention des troubles musculo-squelettiques." />
            <meta name="keywords" content="Andréa Pot, ostéopathe, Maison médicale de la Baie, Plounéour-Brignogan-Plages, traitement musculo-squelettique, prévention santé" />
            <meta property="og:title" content="Andréa Pot - Ostéopathe à Plounéour-Brignogan-Plages" />
            <meta property="og:description" content="Andréa Pot, ostéopathe D.O à Maison médicale de la Baie. Spécialisée dans le traitement et la prévention des troubles musculo-squelettiques." />
            <meta property="og:image" content={`${siteUrl}/images/logo.jpeg`} />
            <meta property="og:url" content="https://andrea-pot-osteopathe.vercel.app/localisation" />
        </Head>
    );
}

export default Metadata;
