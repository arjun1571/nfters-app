import React from 'react';
import Ethe from "../../asset/ethereum 2.png"
import Ethe1 from "../../asset/Ellipse 95 (1).png"
import Ethe2 from "../../asset/Ellipse 95 (2).png"
import Ethe3 from "../../asset/Ellipse 95 (3).png"
import Ethe4 from "../../asset/Ellipse 95 (4).png"

const MoreNftCart = ({data}) => {
    const {name,img}=data
    return (
        <div className="card card-compact  bg-base-100 shadow">
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div className="">
                <div className='flex -mt-5'>
                <img src={Ethe1} alt="" className='-mr-3' />
                <img src={Ethe2} alt="" className='-mr-3' />
                <img src={Ethe3} alt="" className='-mr-3' />
                <img src={Ethe4} alt="" className='-mr-3' />
                </div>
                <h2 className="card-title p-2">{name}</h2>
                <div>
                    <div className='flex  justify-between p-2 items-center'>
                        <div className='flex items-center'>
                        <img src={Ethe} alt=""  className='mr-2'/> <span className='text-accent'>0.25 ETH</span>
                        </div>
                        <p>1 of 321</p>
                    </div>
                    <hr />
                    <div className='flex  justify-between p-2 items-center'>
                        <button class="btn btn-outline btn-primary rounded-full">3h 50m 2s left</button>
                        <p className='font-bold'>Place a bid</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreNftCart;