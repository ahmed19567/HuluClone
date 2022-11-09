 import './App.css';
import HeroIndex from './Component/Head/index'
import Library from './Component/Body/Library'
import Billboard from './Component/BillboardSec/Billboard'
import Spotlight from './Component/SpotLightCon/Spotlight'
import Plan from './Component/Plan/Plan'
import Footer from './Component/Footer/Footer';
  
   
function App() {

  return (
    <div className="App">
      <HeroIndex/>
      <Library/>
      <Billboard/>
      <Spotlight/>
      <Plan/>
      <Footer/>
    </div>
  );
}

export default App;
