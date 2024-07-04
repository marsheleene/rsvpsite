import Link from "next/link";

function ContactItem(props) {
    return (
        <div className="break-inside-avoid-column text-left">
            <div className="font-semibold">{props.title}</div>
            <div className=""><Link href={props.contact} target="_blank" className="hover:underline">{props.contactDisplay}</Link></div>
        </div>
    );
}

export default ContactItem;
