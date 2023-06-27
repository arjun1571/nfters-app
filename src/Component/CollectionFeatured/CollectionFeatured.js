import React from 'react';
import Unplash from "../../asset/unsplash_F56Y7dgrAkc (1).png"
import Elips from "../../asset/Ellipse 95.png"

import Ethe2g from "../../asset/unsplash_9anj7QWy-2g.png"
import EtheQQg from "../../asset/unsplash_LpbyDENbQQg.png"
import EtheQ18 from "../../asset/unsplash_pVoEPpLw818.png"


const CollectionFeatured = () => {
    return (
        <div className='mt-20'>  
            <h1 className='font-bold text-2xl mx-5'>Collection Featured NFTs</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 p-5 gap-5 rounded'>
                <div className='flex'>
                    <div className="card w-auto mr-2 ">
                    <img src={Unplash} alt="" />
                    <div className="card-body">
                        <div className='flex items-center'>
                            <img src={Elips} alt="" className='mr-3' />
                            <div >
                                <h1>The Futr Abstr</h1>
                                <p>10 in the stock</p>
                            </div>                    
                        </div>
                    </div>
                    </div>
                    <div>
                        <img src={Ethe2g} alt="" className='mb-2' />
                        <img src={EtheQQg} alt=""  className='mb-2'/>
                        <img src={EtheQ18} alt="" />
                        <button className="btn btn-outline btn-primary mt-10 rounded-full btn-sm">54 Items</button>
                    </div>
                </div>
                <div className='flex'>
                    <div className="card w-auto mr-2 ">
                    <img src={Unplash} alt="" />
                    <div className="card-body">
                        <div className='flex items-center'>
                            <img src={Elips} alt="" className='mr-3' />
                            <div >
                                <h1>The Futr Abstr</h1>
                                <p>10 in the stock</p>
                            </div>                    
                        </div>
                    </div>
                    </div>
                    <div>
                        <img src={Ethe2g} alt="" className='mb-2' />
                        <img src={EtheQQg} alt=""  className='mb-2'/>
                        <img src={EtheQ18} alt="" />
                        <button className="btn btn-outline btn-primary mt-10 rounded-full btn-sm">54 Items</button>
                    </div>
                </div>
                <div className='flex'>
                    <div className="card w-auto mr-2 ">
                    <img src={Unplash} alt="" />
                    <div className="card-body">
                        <div className='flex items-center'>
                            <img src={Elips} alt="" className='mr-3' />
                            <div >
                                <h1>The Futr Abstr</h1>
                                <p>10 in the stock</p>
                            </div>                    
                        </div>
                    </div>
                    </div>
                    <div>
                        <img src={Ethe2g} alt="" className='mb-2' />
                        <img src={EtheQQg} alt=""  className='mb-2'/>
                        <img src={EtheQ18} alt="" />
                        <button className="btn btn-outline btn-primary mt-10 rounded-full btn-sm">54 Items</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionFeatured;