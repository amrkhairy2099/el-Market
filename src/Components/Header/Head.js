import React from 'react';
function Head() {
   return (
      <>
         <div className="head">
            <div className="container d-flex">
               <div className="left row">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <label>12340</label>
                  <i className="fa fa-envelope"></i>
                  <label>example@gmail.com</label>
               </div>
               <div className="rigth row RText">
                  <label>Theme FQA S</label>
                  <label>Need Helps</label>
                  <span>*</span>
                  <label>EN</label>
                  <span>*</span>
                  <label>USD</label>
               </div>
            </div>
         </div>
      </>
   );
}

export default Head;
