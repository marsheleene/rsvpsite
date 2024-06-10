import CreditsItem from "./CreditsItem";

function CreditsSection() {
    return (
        <>
            <ul>
                <li>
                    <CreditsItem name="Matthieu Golsenne" roles="Creative Director, Designer, Programmer" />
                </li>
                <li>
                    <CreditsItem name="Zoé Bergeret" roles="Art Director, Designer" />
                </li>
            </ul>
            <p>
                RSVP Additional Credits
            </p>
            <ul>
                <li>
                    <CreditsItem name="Elizabeth Maler" roles="Producing, Designer" />
                </li>
            </ul>
        </>
    );
}

export default CreditsSection;
