import keyart from "../images/header_v1.png";
import background from "../images/background.jpg";
import favicon from "./favicon-32.png";

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

const titlePage = "RSVP : le jeu vidéo";
const descriptionPage = "RSVP est un jeu PC d'enquête et de puzzle narratif dans lequel vous incarnez un·e wedding planner. Votre spécialité : créer des plans de table parfaits !";


export const metadata = {
    title: titlePage,
    description: descriptionPage,
    metadataBase: new URL("https://rsvpgame.com/"),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: titlePage,
        description: descriptionPage,
        images: [
            {
                url: keyart.src
            }
        ],
        url: "https://rsvpgame.com",
        siteName: titlePage,
        locale: "fr_FR",
        type: "website"
    },
    twitter: {
        title: titlePage,
        description: descriptionPage,
        url: "https://rsvpgame.com",
        creator: "Team RSVP",
        card: 'summary_large_image',
    },
    icons: {
        icon: favicon.src
    }
}


export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta name="robots" content="nofollow" />
                <meta name="googlebot" content="nofollow" />
            </head>
            <body style={{ '--image-url': `url(${background.src})` }} className={`${fontInter.variable} ${fontCoquette.variable}` + " font-inter bg-[image:var(--image-url)] text-mainColor"}>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    );
}
