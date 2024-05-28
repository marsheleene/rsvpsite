import FactsheetItem from "./FactsheetItem";

function Factsheet() {
    return (
        <article>
            <h1 class="my-8 text-center text-2xl">
            Factsheet
            </h1>

            <FactsheetItem title="Developper:">
                <h3>
                    Team RSVP
                </h3>
            </FactsheetItem>

            <FactsheetItem title="Release date:">
                <div>
                    TBD
                </div>
            </FactsheetItem>

            <FactsheetItem title="Platforms:">
                <div>
                    PC
                </div>
            </FactsheetItem>

            <FactsheetItem title="Website:">
                <div>
                    <a href="https://www.rsvpgame.com" target="_blank" rel="noreferrer">https://rsvpgame.com</a>
                </div>
            </FactsheetItem>
        </article>
    );
}

export default Factsheet;





