import Link from "next/link";

function ContactItem(props) {
    return (
        <div class="break-inside-avoid-column">
            <div class="font-semibold">{props.title}</div>
            <div class=""><Link href={props.contact} target="_blank" className="hover:underline">{props.contactDisplay}</Link></div>
        </div>
    );
}

export default ContactItem;
