import React from 'react';
import CardT from "../../asset/card-tick-1 1.png"
import CardS from "../../asset/chart-square 2.png"

const Transaction = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-10 p-12 gap-20 bg-slate-100 rounded'>
            <div>
                <h1 className='text-3xl font-bold'>The amazing NFT art <br /> of the world here</h1>
            </div>
            <div>
                <div className='flex items-center '>
                    <img src={CardT} alt=""  className='mr-3'/>
                    <h1 className='font-bold'>Fast Transaction</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, <br />  consectetur adipiscing elit. <br /> Aliquam etiam viverra tellus imperdiet.</p>
            </div>
            <div>
                <div className='flex items-center'>
                    <img src={CardS} alt=""  className='mr-3'/>
                    <h1 className='font-bold'>Growth Transaction</h1>
                </div>
                <p >Lorem ipsum dolor sit amet, <br />  consectetur adipiscing elit. <br /> Aliquam etiam viverra tellus imperdiet.</p>
            </div>
        </div>
    );
};

export default Transaction;