function CreditsItem(props) {
    return (
        <>
            <div class="credits_name">{props.name}</div>
            <div class="credits_roles">{props.roles}</div>
        </>
    );
}

export default CreditsItem;