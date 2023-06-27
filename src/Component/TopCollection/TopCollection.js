import React from 'react';
import Unplash from "../../asset/unsplash_F56Y7dgrAkc.png"
import Elips from "../../asset/Ellipse 95.png"
import Ethe from "../../asset/ethereum 2.png"
import EtheQ from "../../asset/unsplash_8uZPynIu-rQ.png"
import EtheC from "../../asset/unsplash_Tyg0rVhOTrE.png"
import Ethe4 from "../../asset/unsplash_wHJ5L9KGTl4.png"
import TopColMCart from './TopColMCart';
import Unplash1 from "../../asset/unsplash_5MTf9XyVVgM.png"
import Unplash2 from "../../asset/unsplash_k0rVudBoB4c.png"
import Unplash3 from "../../asset/unsplash_zkNT5mikUuo.png"
import Unplash4 from "../../asset/unsplash_WjIB-6UxA5Q.png"
import Unplash5 from "../../asset/unsplash_fT49QnFucQ8.png"
import RightMCart from './RightMCart';

const TopCollection = () => {
    const TopCollectionData = [
        {
          id: 1,
          name: "The Futr Abstr",
          img:EtheQ,
          logo: Elips,
          logo2:Ethe,
          value:"0.25 ETH "
        },
        {
          id: 2,
          name: "The Futr Abstr",
          img:EtheC,
          logo: Elips,
          logo2:Ethe,
          value:"0.25 ETH "
        },
        {
          id: 3,
          name: "The Futr Abstr",
          img:Ethe4,
          logo: Elips,
          logo2:Ethe,
          value:"0.25 ETH "
        },
        
      ];
      const TopCollectionPersentData = [
        {
          id: 1,
          name: "CryptoFunks",
          img:Unplash1,
          logo2:Ethe,
          value:"19,769,39",
          parsent:"+26.52%"
        },
        {
          id: 2,
          name: "CryptoFunks",
          img:Unplash2,
          logo2:Ethe,
          value:"2,769,39",
          parsent:"+10.52%"
        },
        {
          id: 3,
          name: "CryptoFunks",
          img:Unplash3,
          logo2:Ethe,
          value:"9,232,39",
          parsent:"+2.52%"
        },
        {
          id: 4,
          name: "CryptoFunks",
          img:Unplash4,
          logo2:Ethe,
          value:"3,769,39",
          parsent:"+1.52%"
        },
        {
          id: 5,
          name: "CryptoFunks",
          img:Unplash5,
          logo2:Ethe,
          value:"10,769,39",
          parsent:"+2.52%"
        },
        
      ];
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-20 p-5 gap-5 rounded'>
            <div>
                <div className="card w-auto ">
                <figure><img src={Unplash} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                    <div>
                        <div className='flex items-center'>
                            <img src={Elips} alt="" className='mr-3' />
                            <div >
                                <h1>The Futr Abstr</h1>
                                <p>10 in the stock</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <h1>Highest Bid</h1>
                        <div className='flex items-center'>
                            <img src={Ethe} alt="" className='mr-2' />
                            <h1>0.25 ETH</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div>
                {
                    TopCollectionData?.map((topData)=> <TopColMCart topData={topData} key={topData.id}></TopColMCart>)
                }
            </div>
            <div>
                <h1 className='text-xl font-bold'>Top Collections over </h1>
                <p><small className='text-primary'>Last 7 days</small></p>
                <div>
                    {
                        TopCollectionPersentData?.map((PersentData)=> <RightMCart PersentData={PersentData} key={PersentData.id}></RightMCart> )
                    }
                </div>
            </div>
        </div>
    );
};

export default TopCollection;