function FactsheetItem(props) {
    return (
        <section class="factsheet-item">
            <h2 class="font-semibold">{props.title}</h2>
            <div>
                {props.children}
            </div>
        </section>
    );
}

export default FactsheetItem;