import Categories from './Categories'
import Slider from './Slider'
import './Home.css'

function Home() {

   return (
      <>
         <div className="home">
            <div className="container d-flex">
               <Categories/>
               <Slider/>
            </div>
         </div>
      </>
   );
}

export default Home;