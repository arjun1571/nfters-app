import React from 'react';
import CollectionFeCart from './CollectionFeCart';
import Unplash from "../../asset/unsplash_F56Y7dgrAkc (1).png"
import Ethe2g from "../../asset/unsplash_9anj7QWy-2g.png"
import Ethe2g1 from "../../asset/unsplash_9anj7QWy-2g (1).png"
import EtheQQg from "../../asset/unsplash_LpbyDENbQQg.png"
import EtheQ18 from "../../asset/unsplash_pVoEPpLw818.png"

import Unplash1 from "../../asset/unsplash_F56Y7dgrAkc (2).png"

import Unplash2 from "../../asset/unsplash_F56Y7dgrAkc (3).png"




const CollectionFeatured = () => {
    const CollectionFeaturedData=[
        {
            id: 1,
            name: "The Futr Abstr",
            img1: Unplash,
            img2: EtheQ18,
            img3: EtheQQg,
            img4: Ethe2g,
          },
          {
            id: 2,
            name: "The Futr Abstr",
            img1: Unplash1,
            img2: EtheQQg,
            img3: EtheQ18,
            img4: Ethe2g1,
          },
          {
            id: 3,
            name: "The Futr Abstr",
            img1: Unplash2,
            img2: Ethe2g,
            img3: EtheQQg,
            img4: EtheQ18,
            
          },
    ]
    return (
        <div className='mt-20'>  
            <h1 className='font-bold text-2xl mx-5'>Collection Featured NFTs</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 p-5 gap-5 rounded'>
                {
                    CollectionFeaturedData?.map(data=> <CollectionFeCart key={data.id} data={data}></CollectionFeCart>)
                }
            </div>
        </div>
    );
};

export default CollectionFeatured;