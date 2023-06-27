import './App.css';
import Banner from './Component/Banner/Banner';
import CollectionFeatured from './Component/CollectionFeatured/CollectionFeatured';
import MoreNfts from './Component/DiscoverMoreNfts/MoreNfts';
import Footer from './Component/Footer/Footer';
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
      <CollectionFeatured></CollectionFeatured>
      <MoreNfts></MoreNfts>
      <Footer></Footer>

    </div>
  );
}

export default App;
