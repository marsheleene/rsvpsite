import Item from "../Item";
import Image from "next-export-optimize-images/image";

import icon_heart2 from "../../../../images/icon_heart2.png";
import icon_heart3 from "../../../../images/icon_heart3.png";
import icon_heart4 from "../../../../images/icon_heart4.png";
import icon_heart6 from "../../../../images/icon_heart6.png";

function FeaturesSection() {
    return (
        <Item title="Caractéristiques">
            <div className="grid grid-cols-[4rem_auto] gap-y-4">
                <Image 
                    src={icon_heart2} 
                    alt="Coeur" 
                    quality={100}
                    className="w-8 place-self-center"
                />
                <p>
                    Dans RSVP, le joueur incarne un·e wedding planner au service d’une famille. Il devra créer
                    des <b>plans de table</b> pour chacun des mariages de cette famille à travers le temps.
                </p>

                <Image 
                    src={icon_heart4} 
                    alt="Coeur" 
                    quality={100}
                    className="w-8 place-self-center"
                />
                <p>
                    Il s’agit d’<b>un mélange unique de jeu d’enquête et de puzzle</b>, dans lequel le joueur devra trouver
                    les indices qui lui permettront de déduire quels placements rempliront <b>les contraintes</b>.
                </p>

                <Image 
                    src={icon_heart3} 
                    alt="Coeur" 
                    quality={100}
                    className="w-8 place-self-center"
                />
                <p>
                    Les relations des personnages les uns envers les autres vont <b>évoluer en fonction de leur placement </b>
                    lors des mariages précédents. Le joueur observera <b>les conséquences de ses choix</b> lors des mariages suivants.
                </p>

                <Image 
                    src={icon_heart6} 
                    alt="Coeur" 
                    quality={100}
                    className="w-8 place-self-center"
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
