import React, {useState} from 'react';

function Favourite({FavItems, delFavItem}) {
  
   return (
      <>
         <section className="favourite py">
            <div className="container">
               {FavItems.length === 0 && <h1 className="no-items capitalize">your favourite list is empty..!</h1>}
               <div className="grid-4">
                  {FavItems.map((item, index) => {
                     return(
                        <div className="fav-box" key={index}>
                           <div className="img">
                              <button type="button" className="del-btn" onClick={() => delFavItem(item)}> 
                                 <i className="fas fa-times"></i>
                              </button>
                              <span className="discount">{item.discount} % Off</span>
                              <img src={item.cover} className="img-fluid" alt="" />
                           </div>
                           <div className="product-details">
                              <h3>{item.name}</h3>
                              <div className="rate"> 
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                              </div>
                              <div className="price d-flex">
                                 <h4>$ {item.price}.00</h4>
                                 <button type="button" className="add-btn">
                                    <i className="fas fa-plus" ></i>
                                 </button>
                              </div>
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

export default Favourite;
