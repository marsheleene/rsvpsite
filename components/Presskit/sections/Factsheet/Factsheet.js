import FactsheetItem from "./FactsheetItem";
import Link from "next/link";

function Factsheet() {
    return (
        <article>
            <h1 class="my-8 text-center font-coquette text-3xl">
            Factsheet
            </h1>

            <FactsheetItem title="Genre :">
                <div>
                    Puzzle & enquête
                </div>
            </FactsheetItem>

            <FactsheetItem title="Durée indicative :">
                <div>
                    3 à 4 heures
                </div>
            </FactsheetItem>

            <FactsheetItem title="Developpeur :">
                <h3>
                    Team RSVP
                </h3>
            </FactsheetItem>

            <FactsheetItem title="Edition :">
                <h3>
                    Auto-édition
                </h3>
            </FactsheetItem>

            <FactsheetItem title="Plateformes :">
                <div>
                    PC
                </div>
            </FactsheetItem>

            <FactsheetItem title="Date de sortie :">
                <div>
                    When it's done
                </div>
            </FactsheetItem>
        </article>
    );
}

export default Factsheet;





