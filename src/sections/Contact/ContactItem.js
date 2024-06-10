function ContactItem(props) {
    return (
        <>
            <div class="credits_name">{props.title}</div>
            <div class="credits_roles"><a href={props.contact} target="_blank">{props.contactDisplay}</a></div>
        </>
    );
}

export default ContactItem;
