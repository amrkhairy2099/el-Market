import React from 'react';
import MobileShop from './MobileShop';
import MobileCate from './MobileCate';
import shopItems from './MobileData';
import './phone-style.css'

const Phones = ({ shopItems, addToCart, addToFav}) => {
   return (
      <>
         <section className="shop background">
            <div className="container d-flex">
               <MobileCate/>
               <div className="w-80">
                  <div className="heading d-flex">
                     <div className="heading-left row f-flex">
                        <h2>Mobile Phones</h2>
                     </div>
                     <div className="heading-right row">
                        <span>View all</span>
                        <i className="fa fa-caret-right"></i>
                     </div>
                  </div>
                  <div className="product-content grid1">
                     <MobileShop shopItems={shopItems} addToCart={addToCart} addToFav={addToFav}/>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Phones;