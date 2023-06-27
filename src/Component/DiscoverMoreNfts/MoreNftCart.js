import React from 'react';

const MoreNftCart = ({data}) => {
    const {name,img}=data
    return (
        <div className="card card-compact  bg-base-100 shadow">
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MoreNftCart;