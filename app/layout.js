import keyart from "../images/header_v1.png";
import favicon_32 from "./favicon-32.png"

export const metadata = {
    title: "RSVP : le jeu vidéo",
    description: "RSVP est un jeu PC d'enquête et de puzzle narratif dans lequel vous incarnez un·e wedding planner. Votre spécialité : créer des plans de table parfaits !"
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
        <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WFKKNRN7');</script>
<!-- End Google Tag Manager -->
                <meta name="robots" content="nofollow" />
                <meta name="googlebot" content="nofollow" />
                <link rel="canonical" href="https://rsvpgame.com" key="canonical" />
                <link rel="icon" type="image/png" href={favicon_32} />
                <meta name="thumbnail" content={keyart.src} />
                <meta property="og:title" content="RSVP : le jeu vidéo" />
                <meta property="og:description" content="RSVP est un jeu PC d'enquête et de puzzle narratif dans lequel vous incarnez un·e wedding planner. Votre spécialité : créer des plans de table parfaits !" />
                <meta property="og:image" content={keyart.src} />
            </head>
            <body>
        <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFKKNRN7"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
