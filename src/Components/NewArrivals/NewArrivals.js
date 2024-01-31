import React from 'react';
import NewData from './arrivals';
import './arrivals-style.css'

const NewArrivals = () => {
   return (
      <>
         <section className="new-arrival background">
            <div className="container">
               <div className="heading s-flex">
                  <div className="heading-left row f-flex">
                     <img src={require('../assets/arrivals/new.png')} alt="" />
                     <h2>New Arrivals</h2>
                  </div>
                  <div className="heading-right row">
                     <span>View all</span>
                     <i className="fa fa-caret-right"></i>
                  </div>
               </div>
               <div className="content">
                  {NewData.map((item, index) => {
                     return(
                        <div className="box" key={index}>
                           <div className="img s-flex">
                              <img src={item.cover} alt="" className="img-fluid"/>
                           </div>
                           <h4>{item.name}</h4>
                           <span className="price">$ {item.price}</span>
                        </div>
                     )
                  })}
               </div>
            </div>
         </section>
      </>
   );
}

export default NewArrivals;