import React from 'react';
import "./Banner.css"
import Elip from "../../asset/Ellipse 95.png"
import Img from "../../asset/unsplash_pVoEPpLw818 (3).png"
import Img1 from "../../asset/unsplash_tZCrFpSNiIQ (1).png"
import Img2 from "../../asset/home.png"
import Img3 from "../../asset/Ellipse 4.png"
const Banner = () => {
    return (
        <div className='mt-20 grid lg:grid-cols-2 gap-5 lg:gap-52 grid-cols-1 mx-3'>
            <div className='mb-10'>
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
            <div className='flex'>
                <div className='relative mx-10 mt-10'>
                    <h1 className='text-xl font-bold text-white'>Abstr Gradient NFT</h1>
                    <div className='flex items-center'>
                        <img src={Elip} alt="" className='mr-3'/>
                        <p className='text-white'>Arkhan17</p>
                    </div>
                    
                    <div className='mt-32 -mx-28'>
                        <img src={Img3} alt="" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="btn btn-outline -mx-5">
                            <div>
                                <p>Current Bid</p>
                                <p>0.25 ETH</p>
                            </div>
                            <div>
                                <p>Current Bid</p>
                                <p>0.25 ETH</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex  -mx-64'>
                    <img src={Img} alt=""  className='mx-10'/>
                    <img src={Img1} alt="" className='-mx-96'/>
                    <img src={Img2} alt="" className='-mx-2'/>
                </div>
            </div>
        </div>






        // <div className=" mt-12 ">
        //         <div className="hero-content flex-col lg:flex-row-reverse">
        //             <h1 className='mx-20  -mt-10'>hello</h1>
        //             <div className='lg:flex '>
        //                 <img src={Img} alt="" className='lg:mx-8 lg:block hidden '/>
        //                 <img src={Img1} alt=""  className='lg:-mx-96 '/>
        //                 <img src={Img2} alt="" className=' lg:block hidden'/>
                        
        //             </div>
                        
        //             <div className='lg:w-1/2 mx-24 '>
        //             <h1 className="text-5xl font-bold">Discover, and collect <br /> Digital Art  NFTs </h1>
        //             <p className="py-6">Digital marketplace for crypto collectibles and  non-fungible tokens (NFTs). <br /> Buy, Sell, and discover  exclusive digital assets. </p>
        //             <button className="btn bg-indigo-600 text-white hover:text-black rounded-full">Explore Now</button>
        //             <div className='flex mt-5'>
        //                 <div className='mr-8'>
        //                     <h1 className='text-4xl font-bold'>98K+</h1>
        //                     <p>Artwork</p>
        //                 </div>
        //                 <div className='mr-8'>
        //                     <h1 className='text-4xl font-bold'>12K+</h1>
        //                     <p>Auction</p>
        //                 </div>
        //                 <div className=''>
        //                     <h1 className='text-4xl font-bold'>15K+</h1>
        //                     <p>Artist</p>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        // </div>
    );
};

export default Banner;