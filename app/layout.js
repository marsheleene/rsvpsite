import keyart from "../images/header_v1.png";

export const metadata = {
    title: "RSVP : le jeu vidéo",
    description: "RSVP est un jeu PC d'enquête et de puzzle narratif dans lequel vous incarnez un·e wedding planner. Votre spécialité : créer des plans de table parfaits !"
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
                <meta property="og:image" content={keyart.src} />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}