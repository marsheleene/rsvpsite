import ContactItem from "./ContactItem";

function ContactSection() {
    return (
        <ul>
            <li>
                <ContactItem title="Business" contact="mailto:contact@rsvpgame.com" contactDisplay="contact@rsvpgame.com" />
            </li>
            <li class="mt-4">
                <ContactItem title="Presse" contact="mailto:contact@rsvpgame.com" contactDisplay="contact@rsvpgame.com" />
            </li>
            <li class="mt-4">
                <ContactItem title="Web" contact="https://rsvpgame.com" contactDisplay="rsvpgame.com" />
            </li>
        </ul>
    );
}

export default ContactSection;
