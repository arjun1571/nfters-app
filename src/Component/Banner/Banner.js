import React from 'react';
import "./Banner.css"
import Elip from "../../asset/Ellipse 95.png"
const Banner = () => {
    return (
        <div className="hero mt-12 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card   shadow-xl h-72 w-80 lg:w-96 bg">
                    <div className="card-body">
                        <h2 className="card-title text-white">Abst Gradient NFT</h2>
                        <div className='flex items-center'>
                            <img src={Elip} alt=""  className='mr-2'/>
                            <p className='text-white'>Arkhan17</p>
                        </div>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                    <div className='w-auto'>
                    <h1 className="text-5xl font-bold">Discover, and collect <br /> Digital Art  NFTs </h1>
                    <p className="py-6">Digital marketplace for crypto collectibles and  non-fungible tokens (NFTs). <br /> Buy, Sell, and discover  exclusive digital assets. </p>
                    <button className="btn bg-indigo-600 text-white hover:text-black rounded-full">Explore Now</button>
                    <div className='flex mt-5'>
                        <div className='mr-8'>
                            <h1 className='text-4xl font-bold'>98K+</h1>
                            <p>Artwork</p>
                        </div>
                        <div className='mr-8'>
                            <h1 className='text-4xl font-bold'>12K+</h1>
                            <p>Auction</p>
                        </div>
                        <div className=''>
                            <h1 className='text-4xl font-bold'>15K+</h1>
                            <p>Artist</p>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;