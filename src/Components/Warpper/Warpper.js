import React from 'react';
import data from './Warpperdata';
import './Warpper.css';


const Warpper = () => {
   
   return (
      <>
         <section className="warpper background">
            <div className="container grid2">
            {data.map((item,index) => {
               return(
                  <div className="product" key={index}>
                     <div className="img icon-circle">
                        <i>{item.cover}</i>
                     </div>
                     <h3>{item.title}</h3>
                     <p>{item.decs}</p>
                  </div>
               );
            })}
            </div>
         </section>
      </>
   );
}

export default Warpper;