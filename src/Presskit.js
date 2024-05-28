import './Presskit.css';
import Item from './Item';
import Factsheet from './Factsheet';
import Team from './Team';
import ConceptArtSection from './ConceptArtSection';
import img_keyart from './images/keyart.png';

function Presskit() {
  return (
    <div className="App" class="mx-40">
      <header className="App-header">
        <img class="keyart" src={img_keyart} />
      </header>
      <main class="container flex flex-col">
          
        <Item title="Description">
          La famille Lagrange des Bas-Moulins a besoin de vous pour organiser
          les plans de table de leurs mariages ! Les marié-e-s auront toujours des
          instructions précises que vous devez suivre. Pour le reste, libre à vous
          de satisfaire un maximum de convives, ou de les placer au gré de vos
          envies... et contempler les conséquences.
          <br /><br />
          R.S.V.P. est un jeu d'enquête et de puzzle narratif dans lequel vous incarnez un-e wedding planner qui doit designer les plans de table de tous les mariages d'une même famille au fil du temps.
          En fonction des placements, les affinités des personnages les uns envers les autres vont varier, jusqu’à changer leurs relations et faire évoluer leurs arcs narratifs.
          Ce sera à vous d'essayer de contenter le plus grand nombre de convives, ou bien de manipuler leurs relations à leur insu selon vos envies...
        </Item>

        <Item title="History" />

        <Item title="Features">
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
        
        <Item title="Concept art">
          <ConceptArtSection />
        </Item>

        <Item title="About Team RSVP">
          <Team />
        </Item>

        <Item title="Credits" />

        <Item title="Contact" />

        <Factsheet />
      </main>
    </div>
  );
}

export default Presskit;
