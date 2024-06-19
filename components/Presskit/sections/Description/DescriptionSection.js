import Item from "../Item";

function DescriptionSection() {
  return (
    <Item title="Description">
      <div className="md:flex flex-col items-center">
        <p className="md:max-w-xl p-8 shadow-xl border-2 rounded-2xl border-[#DDBE71]">La famille Lagrange des Bas-Moulins a besoin de vous pour 
            organiser les plans de table de leurs mariages ! Les marié·e·s auront toujours des instructions précises que vous devez suivre. Pour 
            le reste, libre à vous de satisfaire un maximum de convives, ou de les placer au gré de vos envies... et contempler les conséquences.</p>
        
        <p className="mt-12"><b>RSVP</b> est un jeu d'<b>enquête</b> et de <b>puzzle</b> <b>narratif</b> dans lequel vous incarnez
            un·e wedding planner. Votre spécialité : <b>créer des plans de table parfaits</b> !</p>
        
        <p className="mt-4">Vous accompagnerez <b>différentes personnage</b> de la même famille au fil de leur vie et de leurs mariages.
            En fonction des <b>choix de placements</b> que vous ferez, les affinités des personnages les uns envers les autres vont évoluer, jusqu’à
            <b> modifier leurs relations</b> et poursuivre leurs arcs narratifs.</p>
        <p className="mt-4">Essayerez-vous de <b>contenter</b> le plus grand nombre de convives, ou bien allez-vous <b>manipuler</b> leurs relations
            à leur insu <b>selon vos envies</b> ?</p>
      </div>
    </Item>
  );
}

export default DescriptionSection;
