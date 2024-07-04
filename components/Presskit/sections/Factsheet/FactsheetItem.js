function FactsheetItem(props) {
    return (
        <section className="factsheet-item mt-4 text-left">
            <h2 className="font-semibold">{props.title}</h2>
            <div>
                {props.children}
            </div>
        </section>
    );
}

export default FactsheetItem;