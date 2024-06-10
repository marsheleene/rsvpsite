import TeamMember from "./TeamMember";

import portrait_matthieu from '../../images/portrait_matthieu.png'
import portrait_zoe from '../../images/portrait_zoe.png'

function TeamSection(props) {
  return (
    <div class="columns-2">
      <TeamMember name="Matthieu Golsenne" portrait={portrait_matthieu}>
        <p>S’occupera de la programmation et participera
  au game design et à l’écriture du scénario.
  Après une brève incartade dans la recherche puis
  une carrière de développeur-euse, Matthieu s’est
  formé-e en autodidacte sur le moteur Unity. Iel
  a ensuite surtout évolué dans le domaine de la
  pédagogie, en devenant formateurice certifié-e
  Unity puis responsable pédagogique à Gaming
  Campus Lyon. En plus de jeux réalisés lors de
  game jams (parfois primés), iel a aussi participé
  au développement de Time Rift et Horribunnies.</p>

<p>Particularité : A déjà été invité-e à un mariage
  lors duquel les mariés n’étaient pas assis à la
  même table (et ça s’est bien passé).</p>
    </TeamMember>
    
    <TeamMember name="Zoé Bergeret" portrait={portrait_zoe}>
    <p>S’occupera de la direction artistique et participera
  au game design et à l’écriture du scénario.
  Illustratrice et graphiste diplômée à Cepreco en
  2020, Zoé a d’abord travaillé en tant que créatrice
  d’objets publicitaires. En 2021, elle décide de
  réaliser son rêve en rejoignant l’industrie du
  jeu vidéo en tant que marketing artist. Elle a
  notamment collaboré à The Last Spell, Lakeburg
  Legacies ou encore Worlds of Aria. Elle a une
  activité d’artiste indépendante en parallèle.</p>

  <p>Particularité : N’a jamais assisté à un mariage
  et n’a jamais vu un plan de table (mais dessine
  super bien).</p>
    </TeamMember>
  </div>
  );
}

export default TeamSection;
