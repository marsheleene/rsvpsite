import LeftColumn from './Layout/LeftColumn';
import RightColumn from './Layout/RightColumn';
import Bottom from './Layout/Bottom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

function Presskit() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main class="md:grid grid-cols-3 gap-10 mx-6 md:mx-80">

        <div class="hidden md:block col-span-1 break-inside-avoid-column mb-10">
          <LeftColumn />
        </div>

        <div class="col-span-2 break-inside-avoid-column">
        
          <RightColumn />

          <div class="md:hidden">

            <Bottom />

          </div>

        </div>
        

        <div class="md:hidden col-span-1 break-inside-avoid-column mb-10">
          <LeftColumn />
        </div>

        <div class="hidden md:block col-span-3 mb-10">

          <Bottom />

        </div>

      </main>
      
      <footer class="mb-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Presskit;
