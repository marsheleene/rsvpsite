import Item from "../Item";
import Image from "next-export-optimize-images/image";

import icon_heart1 from "../../../../images/icon_heart1.webp";
import icon_heart2 from "../../../../images/icon_heart2.webp";
import icon_heart3 from "../../../../images/icon_heart3.webp";
import icon_heart4 from "../../../../images/icon_heart4.webp";
import icon_heart6 from "../../../../images/icon_heart6.webp";
import icon_heart7 from "../../../../images/icon_heart7.webp";

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

function FeatureItem(props) {
    return (
        <>
            <ListIcon
                src={props.icon}
                alt="Icône représentant un cœur"
            />
            <p>
                {props.children}
            </p>
        </>
    );
}

function FeaturesSection() {
    return (
        <Item title="Caractéristiques">
            <div className="grid grid-cols-[3rem_auto] gap-y-8 md:gap-y-4">

                <FeatureItem icon={icon_heart2}>
                    Dans RSVP, le joueur incarne un·e wedding planner au service d’une famille. Il devra créer
                    des <b>plans de table</b> pour chacun des mariages de cette famille à travers le temps.
                </FeatureItem>

                <FeatureItem icon={icon_heart4}>
                    Il s’agit d’<b>un mélange unique de jeu d’enquête et de puzzle</b>, dans lequel le joueur devra trouver
                    les indices qui lui permettront de déduire quels placements rempliront <b>les contraintes</b> du mariage.
                </FeatureItem>

                <FeatureItem icon={icon_heart1}>
                    Il s’agit également d’un jeu narratif, dans lequel le joueur se place en <b>chef d’orchestre de
                    l’histoire</b>. C’est elle qui est en charge de <b>la destinée et des dramas</b> de la famille.
                </FeatureItem>

                <FeatureItem icon={icon_heart3}>
                    Les relations des personnages les uns envers les autres vont <b>évoluer en fonction de leur placement </b>
                    lors des mariages précédents. Le joueur observera <b>les conséquences de ses choix</b> lors des mariages suivants.
                </FeatureItem>

                <FeatureItem icon={icon_heart6}>
                    Pour chaque mariage, un certain nombre d'<b>objectifs optionnels</b> sont proposés. Il s'agit de trouver
                    quels placements particuliers vont les valider. Des <b>meta-objectifs, qui s'étendent sur plusieurs mariages</b>,
                    devront être découverts au fil des parties.
                </FeatureItem>

                <FeatureItem icon={icon_heart7}>
                    <b>Le joueur peut aussi se fixer ses objectifs</b> : il pourra essayer de créer les placements les plus
                    optimaux, ou bien s’amuser à expérimenter telles ou telles relations au fil des parties.
                </FeatureItem>
            </div>
        </Item>
    );
}

export default FeaturesSection;
