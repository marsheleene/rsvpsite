function CreditsItem(props) {
    return (
        <div class="break-inside-avoid-column">
            <div class="font-semibold">{props.name}</div>
            <div class="">{props.roles}</div>
        </div>
    );
}

export default CreditsItem;