import Presskit from "./components/Presskit/Presskit";

import { Inter, Bree_Serif } from 'next/font/google'
import localFont from 'next/font/local';

const fontCoquette = localFont({ 
  src: 'fonts/Coquette Regular Regular.ttf',
  variable: '--font-coquette'
})
 
const fontInter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const fontBree = Bree_Serif({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bree'
});

function App() {
  return (
      <Presskit className={`${fontInter.variable} ${fontBree.variable} ${fontCoquette.variable}`} />
  );
}

export default App;
