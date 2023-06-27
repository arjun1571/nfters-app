import React from 'react';
import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-base-200'> 
        <footer className="footer p-10 text-base-content">
            <div>
                <h1 className='font-bold text-2xl'>NFTERS</h1>
                <p>The world’s first and largest digital marketplace for <br /> crypto collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and discover exclusive digital items.</p>
                <div className='flex mt-5'>
                    <FaFacebook className='mr-5 text-4xl '  />  
                    <FaTwitter  className='mr-5 text-4xl'/>  
                    <FaLinkedin className='mr-5 text-4xl' />  
                </div>
            </div> 
            <div>
                <span className="text-black font-bold">Market Place</span> 
                <p className="link link-hover">All NFTs</p> 
                <p className="link link-hover">New</p> 
                <p className="link link-hover">Art</p> 
                <p className="link link-hover">Sports</p>
                <p className="link link-hover">Utility</p>
                <p className="link link-hover">Music</p>
                <p className="link link-hover">Domain Name</p>
            </div> 
            <div>
                <span className="text-black font-bold">My Account</span> 
                <p className="link link-hover">Profile</p> 
                <p className="link link-hover">Favorite</p> 
                <p className="link link-hover">My Collections</p> 
                <p className="link link-hover">Setting</p>
            </div> 
            <div>
                <span className="text-black font-bold">Sta in This Loop</span> 
                <p className="link link-hover">Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.</p> 
                <div className="flex">
                    <input type="text" placeholder="Enter you Email" className="input input-bordered w-full max-w-xs " />
                    <button className="btn btn-primary rounded-full">Subscribe</button>
                </div>
            </div>
        </footer>
        <p className='p-3 text-center'>Copyright © 2023 - All right reserved by Arjun Chandra Das</p>
        </div>
    );
};

export default Footer;