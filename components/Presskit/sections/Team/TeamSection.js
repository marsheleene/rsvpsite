import TeamMember from "./TeamMember";
import Item from "../Item";

import portraitMatthieu from '../../../../images/opt_portrait_matthieu.webp'
import portraitZoe from '../../../../images/opt_portrait_zoe.webp'

function TeamSection(props) {
    return (
        <Item title="À propos de la Team RSVP" className="md:grid md:grid-cols-2 md:gap-x-12 xl:gap-x-32 flex flex-col md:flex-row items-center md:items-start md:justify-center">
            <TeamMember name="Matthieu Golsenne" portrait={portraitMatthieu} linkedIn="https://www.linkedin.com/in/mgolsenne/" className="max-w-xl">
                <p>
                    Matthieu s’occupe de la programmation et du game design et participe à l’écriture du scénario.
                </p>
                <p class="mt-4">
                    Après une carrière de programmeur dans les services, Matthieu s’est formé en autodidacte sur le moteur Unity. Iel
                    a ensuite surtout évolué dans le domaine de la pédagogie, en devenant formateur certifié Unity puis responsable 
                    pédagogique dans une école de jeux vidéo à Lyon. En plus de jeux réalisés lors de game jams (parfois primés), 
                    iel a travaillé sur les productions des jeux <em>Time Rift</em> et <em>Horribunnies</em>.
                </p>

                <p class="mt-4">
                    <span class="font-semibold">Particularité : </span>
                    A déjà été invité à un mariage lors duquel les mariés n’étaient pas assis à la même table (et ça s’est bien passé).
                </p>
            </TeamMember>

            <TeamMember name="Zoé Bergeret" portrait={portraitZoe} website="https://zoebergeret.fr/" linkedIn="https://www.linkedin.com/in/zoe-bergeret/" className="mt-8 md:mt-0 max-w-xl">
                <p>
                    Zoé s’occupe de la direction artistique et participe au game design ainsi qu'à l’écriture du scénario.
                </p>
                <p class="mt-4">
                    Illustratrice et graphiste diplômée à Cepreco en 2020, Zoé a d’abord travaillé en tant que créatrice d’objets 
                    publicitaires. En 2021, elle décide de réaliser son rêve en rejoignant l’industrie du jeu vidéo en tant que marketing 
                    artist. Elle a notamment collaboré à <em>The Last Spell</em>, <em>Lakeburg Legacies</em> ou encore <em>Worlds of Aria</em>. 
                    Elle mène une activité d’artiste indépendante en parallèle.
                </p>

                <p class="mt-4">
                    <span class="font-semibold">Particularité : </span>
                    N’a jamais assisté à un mariage et n’a jamais vu un plan de table (mais dessine super bien).
                </p>
            </TeamMember>
        </Item>
    );
}

export default TeamSection;
