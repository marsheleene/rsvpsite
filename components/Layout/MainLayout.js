import "../../index.css";

import Header from './Header';
import Footer from './Footer';


export default function MainLayout(props) {
    return (
        <div className={props.className}>
            <header className="2xl:mb-10">
                <Header />
            </header>

            <main className="mx-6 md:mx-20 2xl:mx-80">

                {props.children}

            </main>

            <footer className="mb-10">
                <Footer />
            </footer>

        </div>
    );
}
