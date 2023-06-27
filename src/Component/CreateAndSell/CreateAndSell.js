import React from 'react';
import Img from '../../asset/unsplash_E8Ufcyxz514 (1).png'
import Img1 from '../../asset/unsplash_tZCrFpSNiIQ.png'
import Img3 from '../../asset/Ellipse 95 (6).png'
import Img5 from '../../asset/Ellipse 95 (5).png'
import Img4 from '../../asset/unsplash_pVoEPpLw818 (2).png'

const CreateAndSell = () => {
    return (
        <div className='grid lg:grid-cols-2 mt-10 '>
            <div className='lg:flex mr-0'>
                <div className='mx-5'>
                    <img src={Img} alt=""  className=''/>
                    <img src={Img3} alt="" className='mx-56 -mt-10 mr-0'/>
                    <img src={Img1} alt="" className='lg:mx-24 mx-10 mr-0'/>
                    <img src={Img5} alt="" className='mx-56 -mt-10 mr-0'/>
                </div>
                <div className='lg:mt-32 mx-5'>
                    <img src={Img4} alt="" className='' />
                    <img src={Img5} alt="" className='mx-48 -mt-10 mr-0'/>
                </div>
            </div>
            <div className='lg:mx-10 mx-3 mt-32'>
                <h1 className='text-3xl font-bold'>Create and sell your NFTs</h1>
                <p className='my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                <button className="btn btn-active btn-primary">Sign Up Now</button>
            </div>
        </div>
    );
};

export default CreateAndSell;