import React from 'react';
import TData from './Tdata'
import './style.css'

const TopCate = () => {
   return (
      <>
         <section className="top-cate background">
            <div className="container">
               <div className="heading d-flex">
                  <div className="heading-left row f-flex">
                     <i className="fa fa-border-all"></i>
                     <h2>Top Categories</h2>
                  </div>
                  <div className="heading-right row">
                     <span>View all</span>
                     <i className="fa fa-caret-right"></i>
                  </div>
               </div>
               <div className="top-cart d-flex">
                  {TData.map((item, index) => {
                     return (
                        <div className="box" key={index}>
                           <div className="top-info d-flex"> 
                              <span className="tleft">{item.para}</span>
                              <span className="tright">{item.desc}</span>
                           </div>
                           <div className="img f-flex">
                              <img src={item.cover} alt="" />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>
      </>
   )
}

export default TopCate;