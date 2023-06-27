import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import MoreNftCart from './MoreNftCart';
const MoreNfts = () => {
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    return (
        <div className=''>
            <h1 className='text-3xl font-bold'>Discover more NFTs</h1>
            <div className='lg:flex items-center justify-between'>
                <div className='mt-5'>
                    <button className=" btn btn-primary rounded-full mr-3 btn-sm">All Component</button>
                    <button className="btn btn-outline mr-3 rounded-full mb-3 btn-sm">Art</button>
                    <button className="btn btn-outline mr-3 rounded-full mb-3 btn-sm">Celebrties</button>
                    <button className="btn btn-outline mr-3 rounded-full mb-3 btn-sm">Gaming</button>
                    <button className="btn btn-outline mr-3 rounded-full mb-3 btn-sm">Sport</button>
                    <button className="btn btn-outline mr-3 rounded-full mb-3 btn-sm">Music</button>
                    <button className="btn btn-outline mr-3 rounded-full mb-3 btn-sm">Crypto</button>
                </div>
                <div>
                    <button className="btn btn-outline mr-3 rounded-full mb-3 btn-sm lg:mt-5"> <FaFilter />Default</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 mt-10'>
                {
                    datas?.map((data)=> <MoreNftCart key={data.id} data={data}></MoreNftCart>)
                }
            </div>
        </div>
    );
};

export default MoreNfts;