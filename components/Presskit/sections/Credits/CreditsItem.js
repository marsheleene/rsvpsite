function CreditsItem(props) {
    return (
        <div className="break-inside-avoid-column text-left">
            <div className="font-semibold">{props.name}</div>
            <div className="">{props.roles}</div>
        </div>
    );
}

export default CreditsItem;