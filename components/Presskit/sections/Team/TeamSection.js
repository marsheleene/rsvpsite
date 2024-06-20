import TeamMember from "./TeamMember";

import portraitMatthieu from '../../../../images/opt_portrait_matthieu.webp'
import portraitZoe from '../../../../images/opt_portrait_zoe.webp'

function TeamSection(props) {
    return (
        <div class="md:columns-2 md:gap-x-12 xl:gap-x-32 md:flex md:justify-center">
            <TeamMember name="Matthieu Golsenne" portrait={portraitMatthieu} linkedIn="https://www.linkedin.com/in/mgolsenne/" className="max-w-xl">
                <p>Matthieu s’occupe de la programmation et du game design et participe à l’écriture du scénario.
                </p>
                <p class="mt-4">
                    Après une carrière de programmeur dans les services, Matthieu s’est formé en autodidacte sur le moteur Unity. Iel
                    a ensuite surtout évolué dans le domaine de la pédagogie, en devenant formateur certifié Unity puis responsable 
                    pédagogique dans une école de jeux vidéo à Lyon. En plus de jeux réalisés lors de game jams (parfois primés), 
                    iel a travaillé sur les productions des jeux <i>Time Rift</i> et <i>Horribunnies</i>.
                </p>

                <p class="mt-4"><span class="font-semibold">Particularité : </span>A déjà été invité à un mariage
                    lors duquel les mariés n’étaient pas assis à la même table (et ça s’est bien passé).
                    </p>
            </TeamMember>

            <TeamMember name="Zoé Bergeret" portrait={portraitZoe} website="https://zoebergeret.fr/" linkedIn="https://www.linkedin.com/in/zoe-bergeret/" className="max-w-xl">
                <p>S’occupera de la direction artistique et participera
                    au game design et à l’écriture du scénario.</p>
                <p class="mt-4">
                    Illustratrice et graphiste diplômée à Cepreco en
                    2020, Zoé a d’abord travaillé en tant que créatrice
                    d’objets publicitaires. En 2021, elle décide de
                    réaliser son rêve en rejoignant l’industrie du
                    jeu vidéo en tant que marketing artist. Elle a
                    notamment collaboré à The Last Spell, Lakeburg
                    Legacies ou encore Worlds of Aria. Elle a une
                    activité d’artiste indépendante en parallèle.</p>

                <p class="mt-4"><span class="font-semibold">Particularité : </span>N’a jamais assisté à un mariage
                    et n’a jamais vu un plan de table (mais dessine
                    super bien).</p>
            </TeamMember>
        </div>
    );
}

export default TeamSection;
