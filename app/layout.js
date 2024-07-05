import keyart from "../images/header_v1.png";
import background from "../images/background.jpg";

import { Inter } from 'next/font/google'
import localFont from 'next/font/local';

const fontCoquette = localFont({
    src: '../fonts/Coquette Regular Regular.ttf',
    variable: '--font-coquette'
});

const fontInter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});


export const metadata = {
    title: "RSVP : le jeu vidéo",
    description: "RSVP est un jeu PC d'enquête et de puzzle narratif dans lequel vous incarnez un·e wedding planner. Votre spécialité : créer des plans de table parfaits !",
    metadataBase: new URL("https://rsvpgame.com/")
}


export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta name="robots" content="nofollow" />
                <meta name="googlebot" content="nofollow" />
                <link rel="canonical" href="https://rsvpgame.com" key="canonical" />
                <meta name="thumbnail" content={keyart.src} />
                <meta property="og:title" content="RSVP : le jeu vidéo" />
                <meta property="og:description" content="RSVP est un jeu PC d'enquête et de puzzle narratif dans lequel vous incarnez un·e wedding planner. Votre spécialité : créer des plans de table parfaits !" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta name="twitter:title" content="SVP : le jeu vidéo" />
                <meta name="twitter:description" content="RSVP est un jeu PC d'enquête et de puzzle narratif dans lequel vous incarnez un·e wedding planner. Votre spécialité : créer des plans de table parfaits !" />
                <meta name="twitter:url" content="https://rsvpgame.com" />
                <meta property="twitter:creator" content="Team RSVP" />
            </head>
            <body style={{'--image-url': `url(${background.src})`}} className={`${fontInter.variable} ${fontCoquette.variable}` + " font-inter bg-[image:var(--image-url)] text-mainColor"}>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    );
}
