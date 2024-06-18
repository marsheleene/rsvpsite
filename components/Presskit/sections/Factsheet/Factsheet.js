import FactsheetItem from "./FactsheetItem";
import Link from "next/link";

function Factsheet() {
    return (
        <article>
            <h1 class="my-8 text-center font-semibold text-2xl">
            Factsheet
            </h1>

            <FactsheetItem title="Developperur :">
                <h3>
                    Team RSVP
                </h3>
            </FactsheetItem>

            <FactsheetItem title="Date de sortie :">
                <div>
                    TBD
                </div>
            </FactsheetItem>

            <FactsheetItem title="Plateformes :">
                <div>
                    PC
                </div>
            </FactsheetItem>

            <FactsheetItem title="Site web :">
                <div>
                    <Link href="https://www.rsvpgame.com" target="_blank" rel="noreferrer">https://rsvpgame.com</Link>
                </div>
            </FactsheetItem>
        </article>
    );
}

export default Factsheet;





