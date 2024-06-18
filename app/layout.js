import keyart from "../images/header_v1.png";

export const metadata = {
    title: 'RSVP the video game presskit',
    description: 'Presskit of the video game RSVP'
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta name="robots" content="nofollow" />
                <meta name="googlebot" content="nofollow" />
                <link rel="canonical" href="https://rsvpgame.com" key="canonical" />
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