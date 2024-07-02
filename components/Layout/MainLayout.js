import "../../index.css";

import { ReCaptchaProvider } from "next-recaptcha-v3";

import Header from './Header';
import Footer from './Footer';


export default function MainLayout(props) {
  return (
    
    <ReCaptchaProvider>
      <div className={props.className}>
        <header className="2xl:mb-10">
          <Header />
        </header>

        <main class="mx-6 md:mx-20 2xl:mx-80">

          {props.children}

        </main>
        
        <footer class="mb-10">
          <Footer />
        </footer>

      </div>
    </ReCaptchaProvider>
  );
}
