import Item from "../Item";
import CreditsItem from "./CreditsItem";

function CreditsSection() {
    return (
        <Item title="Crédits">
            <ul>
                <li>
                    <CreditsItem name="Matthieu Golsenne" roles="Directeur créatif, designer, programmeur" />
                </li>
                <li class="mt-4">
                    <CreditsItem name="Zoé Bergeret" roles="Directrice artistique, designer" />
                </li>
            </ul>
            <p class="font-coquette text-xl text-center mt-4">
                Crédits additionnels
            </p>
            <ul>
                <li class="mt-4">
                    <CreditsItem name="Elizabeth Maler" roles="Producer, designer" />
                </li>
            </ul>
        </Item>
    );
}

export default CreditsSection;
