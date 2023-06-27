import React from 'react';
import Elips from "../../asset/Ellipse 95.png"



const CollectionFeCart = ({data}) => {
    const {name,img1,img2,img3,img4}=data
    return (
        <div className='flex'>
            <div className="card w-auto mr-2 ">
                    <img src={img1} alt="" />
                    <div className="card-body">
                        <div className='flex items-center'>
                            <img src={Elips} alt="" className='mr-3' />
                            <div >
                                <h1>{name}</h1>
                                <p>10 in the stock</p>
                            </div>                    
                        </div>
                    </div>
            </div>
            <div>
                        <img src={img2} alt="" className='mb-2' />
                        <img src={img3} alt=""  className='mb-2'/>
                        <img src={img4} alt="" />
                        <button className="btn btn-outline btn-primary mt-10 rounded-full btn-sm">54 Items</button>
            </div>
        </div>

    );
};

export default CollectionFeCart;