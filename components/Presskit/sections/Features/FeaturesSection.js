import Item from "../Item";
import Image from "next-export-optimize-images/image";

import icon_heart2 from "../../../../images/icon_heart2.png";
import icon_heart3 from "../../../../images/icon_heart3.png";
import icon_heart4 from "../../../../images/icon_heart4.png";
import icon_heart6 from "../../../../images/icon_heart6.png";

function ListIcon(props) {
    let className = "w-8 justify-self-start self-center";
    if (props.className) {
        className += " " + props.className;
    }
    return (
        <Image 
            src={props.src} 
            alt={props.alt} 
            quality={100}
            className={className}
        />
    );
}

function FeaturesSection() {
    return (
        <Item title="Caractéristiques">
            <div className="grid grid-cols-[3rem_auto] gap-y-4">
                <ListIcon 
                    src={icon_heart2} 
                    alt="Coeur" 
                />
                <p>
                    Dans RSVP, le joueur incarne un·e wedding planner au service d’une famille. Il devra créer
                    des <b>plans de table</b> pour chacun des mariages de cette famille à travers le temps.
                </p>

                <ListIcon 
                    src={icon_heart4} 
                    alt="Coeur" 
                />
                <p>
                    Il s’agit d’<b>un mélange unique de jeu d’enquête et de puzzle</b>, dans lequel le joueur devra trouver
                    les indices qui lui permettront de déduire quels placements rempliront <b>les contraintes</b>.
                </p>

                <ListIcon 
                    src={icon_heart3} 
                    alt="Coeur" 
                />
                <p>
                    Les relations des personnages les uns envers les autres vont <b>évoluer en fonction de leur placement </b>
                    lors des mariages précédents. Le joueur observera <b>les conséquences de ses choix</b> lors des mariages suivants.
                </p>

                <ListIcon 
                    src={icon_heart6} 
                    alt="Coeur" 
                />
                <p>
                    <b>C’est le joueur qui se fixe ses objectifs</b> : il pourra essayer de créer des placements optimaux
                    selon ses critères, ou bien s’amuser à expérimenter telles ou telles relations au fil des parties.
                </p>
            </div>
        </Item>
    );
}

export default FeaturesSection;
