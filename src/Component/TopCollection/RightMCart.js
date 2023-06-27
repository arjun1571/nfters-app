import React from 'react';

const RightMCart = ({PersentData}) => {
    const{id,name,img,logo2,value,parsent}=PersentData
    return (
        <div className='mb-8 mt-4 flex items-center '>
            <div className='flex items-center mr-4'>
                <h1 className='mr-4 font-bold'>{id}</h1>
                <img src={img} alt="" />
            </div>
            <div className=''>
                <h1>{name}</h1>
                <div className='flex'>
                    <img src={logo2} className='mr-2' alt="" />
                    <p>{value}</p>
                </div>
            </div>
            <div>
                <h1 className='mx-8 text-accent'>{parsent}</h1>
            </div>
        </div>
    );
};

export default RightMCart;