import Cards from './components/Cards';
import Listing from './components/Listing';
import './App.css';
import './Etsy.css';
import EtsyData from "./etsy.json";

function App() {
  return (
    <>
      <Cards />
      <Listing items={EtsyData} />
    </>
  );
}

export default App;
