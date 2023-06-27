import './App.css';
import Banner from './Component/Banner/Banner';
import NavBar from './Component/Navbar/NavBar';

function App() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <NavBar></NavBar>
      <hr />
      <Banner></Banner>
    </div>
  );
}

export default App;
