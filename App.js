import Presskit from "./components/Presskit/Presskit";

import { Inter } from 'next/font/google'
import localFont from 'next/font/local';

const fontCoquette = localFont({ 
  src: 'fonts/Coquette Regular Regular.ttf',
  variable: '--font-coquette'
})
 
const fontInter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

function App() {
  return (
      <Presskit className={`${fontInter.variable} ${fontCoquette.variable}`} />
  );
}

export default App;
