import React from 'react';

const NavBar = () => {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>MarketPlace</li>
            <li>Resource</li>
            <li>About</li>
            </ul>
          </div>
          <h1 className="btn btn-ghost normal-case lg:text-xl text-indigo-600">NFTERS</h1>
          <div className='hidden lg:block '>
          <ul className="menu menu-horizontal px-1 p-2 ">
            <li className='p-2 btn btn-ghost normal-case ' >MarketPlace</li>
            <li className='p-2 btn btn-ghost normal-case ' >Resource</li>
            <li className='p-2 btn btn-ghost normal-case ' >About</li>
          </ul>
          </div>
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Search" className="input input-bordered rounded-full w-32  lg:w-72 " />
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary lg:mx-2 rounded-full">Upload</button>
          <button className="btn btn-outline btn-primary hidden lg:block rounded-full">Connect Wallet</button>
        </div>
      </div>
    );
};

export default NavBar;