import React from 'react';

const TopColMCart = ({topData}) => {
    const {name,img,logo,value,logo2}=topData
    return (
        <div className='flex mb-8'>
            <div className='mr-3'>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className='font-bold mt-2'>{name}</h1>
                <div className='flex justify-around'>
                    <div>
                        <img src={logo} alt="" className='mr-2' />
                    </div>
                    <div>
                        <button className="btn btn-outline btn-accent btn-xs  mr-2"><img src={logo2} alt="" className='text-accent' /> {value}</button> 
                    </div>
                    <div className='hidden lg:block'>
                        <h1>1 of 8</h1>
                    </div>
                </div>
                <button className="btn btn-outline btn-primary mt-4 rounded-full btn-sm">Place a bid</button>
            </div>
        </div>
        // <div className="card card-side mb-10">
        //     <figure><img src={img} alt="Movie"/></figure>
        //     <div className="">
        //         <div className='mr-2'>
        //         <h2 className="card-title"> {name}</h2>
        //         <p>Click the button to watch on Jetflix app.</p>
        //         <div className="card-actions justify-end">
        //         <button className="btn btn-primary">Watch</button>
        //         </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default TopColMCart;