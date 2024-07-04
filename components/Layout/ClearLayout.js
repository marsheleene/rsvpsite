import "../../index.css";

export default function ClearLayout(props) {
    return (

        <main  className={props.className}>

            {props.children}

        </main>
    );
}
