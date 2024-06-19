import Item from "../Item";

function HistorySection() {
    return (          
        <Item title="Genèse">
            <p>L’idée de créer un jeu de planification de mariage a germé au cours d’une conversation entre Matthieu et
                une amie à lui. Elle lui racontait la préparation de ses 3 mariages précédents, les nombreuses étapes
                laborieuses, et malgré tout, le plaisir qu’elle avait eu à gérer l’organisation. Matthieu, amusé par ce récit,
                suggéra sur le ton de la plaisanterie d’en faire un jeu de puzzle. Devant la réponse enthousiaste e son amie, 
                ce qui commença par une blague devint un projet concret.</p>

            <p className="mt-4">Le souhait d’y joindre une dimension narrative importante vint rapidement. Matthieu avait envie 
                d’expérimenter avec d’autres façons de raconter des histoires, laissant le joueur assez libre dans son interprétation.</p>

            <p className="mt-4">Il fallait encore quelqu’un pour assurer la direction artistique du jeu avant de pouvoir lui donner vie. 
                Matthieu contacta alors Zoé, dont le style artistique l’avait profondément charmé. C’est ainsi que naquit l’équipe de RSVP.</p>
      </Item>
    );
}

export default HistorySection;
