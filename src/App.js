import './App.css';
import Factsheet from './Factsheet';

import img_keyart from './images/keyart.png';
import img_concept1 from './images/concept1.png';
import img_concept2 from './images/concept2.png';
import img_concept3 from './images/concept3.png';
import img_concept4 from './images/concept4.png';

function App() {
  return (
    <div className="App" class="mx-40">
      <header className="App-header">
        <img class="keyart" src={img_keyart} />
      </header>
      <main class="container flex flex-col">
          
        <h1 class="my-8 text-center text-2xl">
          Description
        </h1>

        <h1 class="my-8 text-center text-2xl">
          History
        </h1>

        <h1 class="my-8 text-center text-2xl">
          Features
        </h1>

        <h1 class="my-8 text-center text-2xl">
          Concept art
        </h1>

        <div class="columns-2">
          <a href={img_concept1} target="_blank">
            <img class="w-full aspect-auto" src={img_concept1} />
          </a>
          <a href={img_concept2} target="_blank">
            <img class="w-full aspect-auto" src={img_concept2} />
          </a>
          <a href={img_concept3} target="_blank">
            <img class="w-full aspect-auto" src={img_concept3} />
          </a>
          <a href={img_concept4} target="_blank">
            <img class="w-full aspect-auto" src={img_concept4} />
          </a>
        </div>

        <h1 class="my-8 text-center text-2xl">
          About Team RSVP
        </h1>

        <h1 class="my-8 text-center text-2xl">
          Credits
        </h1>

        <h1 class="my-8 text-center text-2xl">
          Contact
        </h1>

      </main>
    </div>
  );
}

export default App;
