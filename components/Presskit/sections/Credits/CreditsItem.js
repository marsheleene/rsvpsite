function CreditsItem(props) {
    return (
        <div class="break-inside-avoid-column text-left">
            <div class="font-semibold">{props.name}</div>
            <div class="">{props.roles}</div>
        </div>
    );
}

export default CreditsItem;