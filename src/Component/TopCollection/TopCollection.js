import React from 'react';
import Unplash from "../../asset/unsplash_F56Y7dgrAkc.png"
import Elips from "../../asset/Ellipse 95.png"
import Ethe from "../../asset/ethereum 2.png"
import EtheQ from "../../asset/unsplash_8uZPynIu-rQ.png"
import EtheC from "../../asset/unsplash_Tyg0rVhOTrE.png"
import Ethe4 from "../../asset/unsplash_wHJ5L9KGTl4.png"
import TopColMCart from './TopColMCart';

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
                <h1 className='text-3xl font-bold'>The amazing NFT art <br /> of the world here</h1>
            </div>
        </div>
    );
};

export default TopCollection;