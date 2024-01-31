import React from 'react';
import Slider from "react-slick";

const NextArrow = (props) => {
   const { onClick } = props
   return (
      <div className="control-btn" onClick={onClick}>
         <button className="next">
            <i className="fas fa-angle-left"></i>
         </button>
      </div>
   )
} 

const PrevArrow = (props) => {
   const { onClick } = props
   return (
      <div className="control-btn" onClick={onClick}>
         <button className="prev">
            <i className="fas fa-angle-right"></i>
         </button>
      </div>
   )
   } 

function FlashCard({products, addToCart, addToFav}) {

   var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
   }

   return (
      <> 
         <Slider {...settings}>
            {products.map((item, index) => {
               return(
                  <div className="box center" key={index}>
                     <div className="product mtop">
                        <div className="img">
                           <span className="discount">{item.discount} % Off</span>
                           <img src={item.cover} alt="" />
                           <div className="product-like" active="false">
                              <i className="fas fa-heart" onClick={(e) => addToFav(item)}></i>
                           </div>
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
                              <button onClick={() => addToCart(item)}>
                                 <i className="fas fa-plus" ></i>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })}
         </Slider>
      </>
   );
}

export default FlashCard;