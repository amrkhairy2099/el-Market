import React from 'react';
import Mobilebrands from './Mobilebrands'

const Cate = () => {
   return (
      <>
         <div className="category">
            <div className="mobile-head d-flex">
               <h1>Brands</h1>
               <h1>Shops</h1>
            </div>
            {Mobilebrands.map((item, index) => {
               return (
                  <div className="box f-flex" key={index}>
                     <img src={item.cateImg} alt="" />
                     <span>{item.cateName}</span>
                  </div>
               )
            })}
            <button className="btn" >View All Brands</button>
         </div>
      </>
   )
}

export default Cate;