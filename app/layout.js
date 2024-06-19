import keyart from "../images/header_v1.png";

export const metadata = {
    title: "RSVP : le jeu vidéo",
    description: "La famille Lagrange des Bas-Moulins a besoin de vous pour organiser les plans de table de leurs mariages ! \
        Les marié·e·s auront toujours des instructions précises que vous devez suivre. Pour le reste, libre à vous de satisfaire \
        un maximum de convives, ou de les placer au gré de vos envies... et contempler les conséquences."
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