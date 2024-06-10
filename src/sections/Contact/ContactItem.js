function ContactItem(props) {
    return (
        <div class="break-inside-avoid-column">
            <div class="font-semibold">{props.title}</div>
            <div class=""><a href={props.contact} target="_blank">{props.contactDisplay}</a></div>
        </div>
    );
}

export default ContactItem;
