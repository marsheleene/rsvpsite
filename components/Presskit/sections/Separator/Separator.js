function Separator(props) {

    let height = 4;
    if (props.height) {
        height = props.height;
    }

    return (
        <p className={"mt-" + height}></p>
    );
}

export default Separator;