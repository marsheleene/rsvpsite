import keyart from "../images/header_v1.png";

export const metadata = {
    title: "RSVP : le jeu vidéo",
    description: "RSVP est un jeu d'enquête et de puzzle narratif dans lequel vous incarnez un weeding planner. À vous de créer les plans de tables les plus optimaux... ou bien apportant le plus de chaos !"
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta name="robots" content="nofollow" />
                <meta name="googlebot" content="nofollow" />
                <link rel="canonical" href="https://rsvpgame.com" key="canonical" />
                <meta name="thumbnail" content={keyart.src} />
                <meta property="og:title" content="RSVP the video game presskit" />
                <meta property="og:description" content="RSVP the video game presskit" />
                <meta property="og:image" content={keyart.src} />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
  }