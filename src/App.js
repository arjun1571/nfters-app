import './App.css';
import Banner from './Component/Banner/Banner';
import NavBar from './Component/Navbar/NavBar';
import TopCollection from './Component/TopCollection/TopCollection';
import Transaction from './Component/Transaction/Transaction';

function App() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <NavBar></NavBar>
      <hr />
      <Banner></Banner>
      <Transaction></Transaction>
      <TopCollection></TopCollection>
    </div>
  );
}

export default App;
