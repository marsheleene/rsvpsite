import FactsheetItem from "./FactsheetItem";
import Item from "../Item";

function Factsheet() {
    return (
        <Item title="Factsheet">

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
                    Autoédition
                </h3>
            </FactsheetItem>

            <FactsheetItem title="Plateformes :">
                <div>
                    PC
                </div>
            </FactsheetItem>

            <FactsheetItem title="Date de sortie :">
                <div>
                    Quand ça sera terminé !
                </div>
            </FactsheetItem>
        </Item>
    );
}

export default Factsheet;





