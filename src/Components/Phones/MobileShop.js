import React, { useState } from 'react';

const MobileShop = ({shopItems, addToCart, addToFav}) => {
   
   return (
      <> 
         {shopItems.map((item, index) => {
            return(
               <div className="box center" key={index}>
                  <div className="product mtop">
                     <div className="img">
                        <span className="discount">{item.discount} % Off</span>
                        <img src={item.cover} alt="" className="img-fluid"/>
                        <div className="product-like">
                           <i className="fa fa-heart" onClick={() => addToFav(item)}></i>
                        </div>
                     </div>
                     <div className="product-details">
                        <h3>{item.name}</h3>
                        <div className="rate"> 
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <div className="price d-flex">
                           <h4>$ {item.price}.00</h4>
                           <button>
                              <i className="fa fa-plus" onClick={() => addToCart(item)}></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </>
   )
}

export default MobileShop;