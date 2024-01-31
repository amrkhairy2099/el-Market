import React from 'react';

const Annocument = () => {
   
   const style1= {
      width: "30%",
      height: "340px",
   }
   const style2= {
      width: "68%",
      height: "340px",
   }
   
   return (
      <>
         <section className="annocument background">
            <div className="container d-flex">
               <div className="img f-flex" style={style1}>
                  <img src={require('../assets/banner-1.png')} className="img-fluid" alt="" />
               </div>
               <div className="img f-flex" style={style2}>
                  <img src={require('../assets/banner-2.png')} className="img-fluid" alt="" />
               </div>
            </div>
         </section>
      </>
   );
}

export default Annocument;