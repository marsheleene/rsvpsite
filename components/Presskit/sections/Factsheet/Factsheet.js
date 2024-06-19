import FactsheetItem from "./FactsheetItem";
import Link from "next/link";

function Factsheet() {
    return (
        <article>
            <h1 class="my-8 text-center font-coquette text-3xl">
            Factsheet
            </h1>

            <FactsheetItem title="Developpeur :">
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
                    <Link href="https://www.rsvpgame.com" target="_blank" className="hover:underline">https://rsvpgame.com</Link>
                </div>
            </FactsheetItem>
        </article>
    );
}

export default Factsheet;





