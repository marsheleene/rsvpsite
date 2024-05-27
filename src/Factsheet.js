import FactsheetItem from "./FactsheetItem";

function Factsheet() {
    return (
        <div>
            <h1 class="my-8 text-center text-2xl">
            Factsheet
            </h1>

            <FactsheetItem>
                <h2>
                Developer:
                </h2>

                <h3>
                Team RSVP
                </h3>
            </FactsheetItem>

            <FactsheetItem>
                <h2>
                Release date:
                </h2>

                <div>
                TBD
                </div>
            </FactsheetItem>

            <FactsheetItem>
                <h2>
                Platforms: 
                </h2>
                
                <div>
                PC
                </div>
            </FactsheetItem>

            <FactsheetItem>
                <h2>Website:</h2>

                <div>
                <a href="https://www.rsvpgame.com" target="_blank">https://rsvpgame.com</a>
                </div>
            </FactsheetItem>
        </div>
    );
}

export default Factsheet;





