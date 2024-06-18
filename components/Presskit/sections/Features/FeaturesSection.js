import Item from "../Item";

function FeaturesSection() {
    return (
        <Item title="Caractéristiques">
          <ul>
            <li>Dans RSVP, la joueuse incarne une wedding planneuse au service d’une famille. Elle devra créer
            des plans de table pour chacun des mariages de cette famille à travers les générations.</li>

            <li>Il s’agit d’un mélange unique de jeu d’enquête et de puzzle, dans lequel la joueuse devra trouver
            les indices qui lui permettront de déduire quels placements rempliront les contraintes.</li>

            <li>Il s’agit également d’un jeu narratif, dans lequel la joueuse se place en cheffe d’orchestre de
            l’histoire racontée. C’est elle qui est en charge de la destinée et des dramas de la famille.</li>

            <li>Les relations des personnages les uns envers les autres vont évoluer en fonction de leur entourage
            lors des mariages précédents. La joueuse observe ces conséquences lors des mariages suivants.</li>

            <li>C’est la joueuse qui se fixe ses objectifs : elle pourra essayer de créer des placements optimaux
            selon ses critères, ou bien s’amuser à expérimenter telles ou telles relations au fil des parties.</li>
          </ul>
        </Item>
    );
}

export default FeaturesSection;
