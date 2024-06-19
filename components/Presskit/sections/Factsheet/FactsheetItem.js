function FactsheetItem(props) {
    return (
        <section class="factsheet-item mt-4 text-left">
            <h2 class="font-semibold">{props.title}</h2>
            <div>
                {props.children}
            </div>
        </section>
    );
}

export default FactsheetItem;