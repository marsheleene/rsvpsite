export const metadata = {
    title: 'RSVP the video game',
    description: 'Website of the video game RSVP'
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
  }