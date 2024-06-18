import FactsheetItem from "./FactsheetItem";

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
                    <a href="https://www.rsvpgame.com" target="_blank" rel="noreferrer">https://rsvpgame.com</a>
                </div>
            </FactsheetItem>
        </article>
    );
}

export default Factsheet;





