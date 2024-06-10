import CreditsItem from "./CreditsItem";

function CreditsSection() {
    return (
        <>
            <ul>
                <li>
                    <CreditsItem name="Matthieu Golsenne" roles="Creative Director, Designer, Programmer" />
                </li>
                <li class="mt-4">
                    <CreditsItem name="Zoé Bergeret" roles="Art Director, Designer" />
                </li>
            </ul>
            <p class="font-semibold text-lg text-center mt-4">
                RSVP Additional Credits
            </p>
            <ul>
                <li class="mt-4">
                    <CreditsItem name="Elizabeth Maler" roles="Producer, Designer" />
                </li>
            </ul>
        </>
    );
}

export default CreditsSection;
