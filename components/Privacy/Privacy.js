import Link from "next/link";

function Privacy() {
    return (
        <>
            <h1 class="font-coquette pt-8  text-center text-3xl">
                Politique de confidentialité
            </h1>

            <h2 class="pt-8 font-bold text-lg">
                Politique de traitement des données personnelles aux termes des art. 13-14 du Règlement UE 2016/679
            </h2>

            <p class="mt-4">
                Matthieu Golsenne (ci-après le Titulaire), en tant que Titulaire du traitement de vos données personnelles, aux termes et pour 
                les effets du Règlement UE 2016/679, ci-après 'RGPD', par les présentes, vous informe que ladite réglementation envisage la 
                protection des personnes concernées par rapport au traitement des données personnelles et que ce traitement fera fond sur les 
                principes de rectitude, licéité, transparence et sauvegarde de votre confidentialité et de vos droits.
            </p>

            <h2 class="pt-8 font-bold text-lg">
                Finalités du traitement et base juridique du traitement
            </h2>

            <p class="mt-4">Après votre consentement préalable, vos données personnelles pourront être utilisées pour les finalités suivantes :</p>
            <p class="mt-4">Donner suite à votre demande d’inscription à notre newsletter visant à vous informer sur les offres commerciales, 
                le développement de nouveaux services et produits et l’organisation d’événements, de foires, d’expositions, etc.</p>
            <p class="mt-4">La fourniture des données est obligatoire pour s’inscrire à la newsletter, dans le cas contraire, il ne sera pas 
                possible de prendre en charge votre demande.</p>

            <h2 class="pt-8 font-bold text-lg">
                Modes de traitement
            </h2>
            
            <p class="mt-4">Vos données personnelles pourront être traitées de la façon suivante :</p>

            <ul class="list-disc">
                <li class="ml-6">Traitement par le biais de systèmes informatiques de l’entreprise;</li>
                <li class="ml-6">Traitement manuel par le biais de fichiers papier.</li>
            </ul>
            <p class="mt-4">Chaque traitement a lieu suivant les modes visés par les articles 6, 32 du RGPD et en adoptant les mesures de sécurité 
                convenables prévues.</p>

            <h2 class="pt-8 font-bold text-lg">
                Communication
            </h2>

            <p class="mt-4">Vos données ne seront traitées que par le personnel expressément autorisé par le Titulaire aux termes de l’Art. 29 du RGPD. 
                Vos données pourront être communiquées à des tiers dûment nommés Responsables du traitement, notamment à :</p>

            <ul class="list-disc">
                <li class="ml-6">Des sujets externes qui s’occupent du développement, de l’assistance et de la maintenance des bases de données du
                    site web et qui fournissent des services d’hébergement ;</li>
                <li class="ml-6">Des sociétés tierces qui fournissent des plates-formes d’envoi automatisé de newsletters ;</li>
                <li class="ml-6">Des collaborateurs techniques et commerciaux.</li>
            </ul>
            <p class="mt-4">Vos données personnelles ne seront aucunement divulguées.</p>

            <h2 class="pt-8 font-bold text-lg">
                Période de conservation des données
            </h2>

            <p class="mt-4">Vos données seront conservées suivant les logiques suivantes :</p>
            <p class="mt-4">Votre adresse électronique sera conservée dans nos listes de publipostage tant que vous ne demandez pas de l’effacer par 
                la fonction spéciale présente en bas de la newsletter.</p>

            <h2 class="pt-8 font-bold text-lg">
                Titulaire du traitement des données
            </h2>

            <p class="mt-4">Le Titulaire du traitement est Matthieu Golsenne, dont le siège légal est à 44 rue Turbil, 69003 Lyon, France - 
                courriel : <Link href="mailto:contact@rsvpgame.com" target="_blank" className="hover:underline">contact@rsvpgame.com</Link></p>

            <h2 class="pt-8 font-bold text-lg">
                Vos droits
            </h2>

            <p class="mt-4">Vous avez le droit d’obtenir du titulaire l’effacement (droit à l’oubli), la restriction, l’actualisation, la rectification, 
                la portabilité, l’opposition au traitement des données personnelles qui vous concernent et, en général, vous pouvez exercer tous les droits 
                visés par les art. 15, 16, 17, 18, 19, 20, 21, 22 du RGPD, qui peuvent être consultés sur le lien suivant.</p>

            <p class="mt-4">Pour exercer vos droits, vous pouvez envoyer une communication à l’adresse indiquée ci-dessous ou bien un courriel à <Link href="mailto:contact@rsvpgame.com" target="_blank" className="hover:underline">contact@rsvpgame.com</Link></p>

            <p class="mt-4">Vous pouvez envoyer une communication ou une réclamation en vous adressant à la Commission Nationale de l'Informatique et des  
                Libertés dont le siège est à 3, place de Fontenoy - UNESCO, 75007 - courriel : <Link href="mailto:inforientation@cnil.fr" target="_blank" className="hover:underline">inforientation@cnil.fr</Link></p>
        </>
    );
}

export default Privacy;
