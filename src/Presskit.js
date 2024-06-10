import './Presskit.css';
import Item from './sections/Item';
import TeamSection from './sections/Team/TeamSection';
import ConceptArtSection from './sections/ConceptArt/ConceptArtSection';
import CreditsSection from './sections/Credits/CreditsSection';
import ContactSection from './sections/Contact/ContactSection';
import Factsheet from './sections/Factsheet/Factsheet';
import img_keyart from './images/keyart.png';

function Presskit() {
  return (
    <div className="App" class="mx-6 md:mx-40">
      <header className="App-header">
        <img class="keyart" src={img_keyart} />
      </header>

      <main class="md:grid grid-cols-3 gap-10">

        <div class="col-span-2 break-inside-avoid-column">
        
          <Item title="Description">
            <p>La famille Lagrange des Bas-Moulins a besoin de vous pour organiser
              les plans de table de leurs mariages ! Les marié-e-s auront toujours des
              instructions précises que vous devez suivre. Pour le reste, libre à vous
              de satisfaire un maximum de convives, ou de les placer au gré de vos
              envies... et contempler les conséquences.</p>
            
            <p>R.S.V.P. est un jeu d'enquête et de puzzle narratif dans lequel vous incarnez un-e wedding planner qui doit designer 
              les plans de table de tous les mariages d'une même famille au fil du temps. En fonction des placements, les affinités 
              des personnages les uns envers les autres vont varier, jusqu’à changer leurs relations et faire évoluer leurs arcs narratifs.
              Ce sera à vous d'essayer de contenter le plus grand nombre de convives, ou bien de manipuler leurs relations à leur insu 
              selon vos envies...</p>
          </Item>

          <Item title="History">
            <p>L’idée de créer un jeu de planification de mariage a germé au cours d’une conversation entre Matthieu et
              une très chère amie à lui. Elle lui racontait la préparation de ses 3 mariages précédents, les nombreuses étapes
              laborieuses, et malgré tout, le plaisir qu’elle avait eu à gérer l’organisation. Matthieu, amusé-e par le récit
              de son amie, suggéra sur le ton de la plaisanterie d’en faire un jeu de puzzle. Devant la réponse enthousiaste
              de son amie, ce qui commença par une blague devint un projet concret.</p>

            <p>Le souhait d’y joindre une dimension narrative importante vint rapidement. Matthieu avait envie d’expérimenter avec 
              d’autres façons de raconter des histoires, laissant la joueuse assez libre dans son interprétation, inspiré-e par le jeu 
              Unpacking (Witch Beam, 2021).</p>

            <p>Il fallait encore quelqu’un pour assurer la direction artistique du jeu avant de pouvoir lui donner vie. Matthieu
              contacta alors Zoé, dont le style artistique l’avait profondément charmé. C’est ainsi que naquit l’équipe de RSVP.</p>
          </Item>

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

          <div class="md:hidden">

            <Item title="Concept art">
              <ConceptArtSection />
            </Item>

            <Item title="About Team RSVP">
              <TeamSection />
            </Item>

          </div>

        </div>
        

        <div class="col-span-1 break-inside-avoid-column mb-10">

          <Factsheet />

          <Item title="RSVP Credits">
            <CreditsSection />
          </Item>

          <Item title="Contact">
            <ContactSection />
          </Item>

        </div>

        <div class="col-span-3 hidden md:block mb-10">

          <Item title="Concept art">
            <ConceptArtSection />
          </Item>

          <Item title="About Team RSVP">
            <TeamSection />
          </Item>

        </div>

      </main>
      
      <footer class="text-sm font-light italic text-center mb-10">
        © Team RSVP, 2024
      </footer>
    </div>
  );
}

export default Presskit;
