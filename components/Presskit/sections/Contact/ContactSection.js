import Item from "../Item";
import ContactItem from "./ContactItem";

function ContactSection() {
    return (
        <Item title="Contacts">
            <ul>
                <li>
                    <ContactItem title="Pour toute demande d'information" contact="mailto:contact@rsvpgame.com" contactDisplay="contact@rsvpgame.com" />
                </li>
            </ul>
        </Item>
    );
}

export default ContactSection;
