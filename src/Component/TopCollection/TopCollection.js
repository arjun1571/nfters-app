import React from 'react';
import Unplash from "../../asset/unsplash_F56Y7dgrAkc.png"
import Elips from "../../asset/Ellipse 95.png"
import Ethe from "../../asset/ethereum 2.png"
const TopCollection = () => {
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
                <h1 className='text-3xl font-bold'>The amazing NFT art <br /> of the world here</h1>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>The amazing NFT art <br /> of the world here</h1>
            </div>
        </div>
    );
};

export default TopCollection;