import Item from "../Item";
import CreditsItem from "./CreditsItem";

function CreditsSection() {
    return (
        <Item title="Crédits">
            <ul>
                <li>
                    <CreditsItem name="Matthieu Golsenne" roles="Directeur créatif, designer, programmeur" />
                </li>
                <li className="mt-4">
                    <CreditsItem name="Zoé Bergeret" roles="Directrice artistique, designer" />
                </li>
            </ul>
        </Item>
    );
}

export default CreditsSection;
