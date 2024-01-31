import React from 'react'
import Ddata from './Ddata'
import './discount-style.css'

const Discount = () => {
   return (
      <>
         <section className="big-discount background">
            <div className="container">
               <div className="heading d-flex">
                  <div className="heading-left s-flex">
                     <img src={require('../assets/discount/gift.png')} alt="" />
                     <h2>Big Discounts</h2>
                  </div>
                  <div className="heading-right row">
                     <span>View all</span>
                     <i className="fa fa-caret-right"></i>
                  </div>
               </div>
               <div className="grid">
                  {Ddata.map((item, index) => {
                     return(
                        <div className="box" key={index}>
                           <div className="img f-flex">
                              <img src={item.cover} alt="" className="img-fluid"/>
                           </div>
                           <div className="info">
                              <h4>{item.name}</h4>
                              <span>$ {item.price}</span>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </section>
      </>
   );
}

export default Discount;