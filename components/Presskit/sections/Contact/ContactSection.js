import Item from "../Item";
import ContactItem from "./ContactItem";

function ContactSection() {
    return (
        <Item title="Contacts">
            <ul>
                <li>
                    <ContactItem title="Business" contact="mailto:contact@rsvpgame.com" contactDisplay="contact@rsvpgame.com" />
                </li>
                <li class="mt-4">
                    <ContactItem title="Presse" contact="mailto:contact@rsvpgame.com" contactDisplay="contact@rsvpgame.com" />
                </li>
            </ul>
        </Item>
    );
}

export default ContactSection;
