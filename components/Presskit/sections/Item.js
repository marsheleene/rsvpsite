function Item(props) {

    let contentClassName = "text-justify";
    if (props.className) {
        contentClassName += " " + props.className;
    }

    return (
        <section class="break-inside-avoid-column">
            <h1 className="font-coquette py-8 text-center text-3xl text-linkColor">
                {props.title}
            </h1>
            <div className={contentClassName}>
                {props.children}
            </div>
        </section>
    );
}

export default Item;
