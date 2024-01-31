import React from 'react';

const Cart = ({CartItem, addToCart, decreaseQty, removeProduct}) => {
   
   const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
   
   return (
      <>
         <section className="cart-items">
            <div className="container d-flex">
               <div className="cart-details">
               {CartItem.length === 0 && <h1 className="no-items">! Your Cart Is Embty</h1>}
               {CartItem.map((item, index) => {
                  const productQty = item.price * item.qty
                  return (
                     <div className="cart-list product d-flex" key={index}>
                        <div className="img">
                           <img src={item.cover} alt="" />
                        </div>
                        <div className="cart-details">
                           <h3>{item.name}</h3>
                           <h4>
                              ${item.price}
                              <span>{item.qty}</span>
                              <span>${productQty}.00</span>
                           </h4>
                        </div>
                        
                        <div className="cart-items-function"> 
                           <div className="remove-cart"> 
                              <button className="remove-btn" onClick={() => removeProduct(item)}> 
                                 <i className="fas fa-times"></i>
                              </button>
                           </div>
                           <div className="cart-control d-flex">
                              <button className="increes" onClick={() => addToCart(item)}>
                                 <i className="fas fa-plus"></i>
                              </button>
                              <button className="decrees" onClick={() => decreaseQty(item)}>
                                 <i className="fas fa-minus"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                  )
               })}
               </div>
               <div className={CartItem.length === 0 ? 'hidden' : 'cart-total product'}>
                  <h2>Cart Summary</h2>
                  <div className=' d-flex'>
                    <h4>Total Price :</h4>
                    <h3>${totalPrice}.00</h3>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Cart;