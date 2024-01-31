import React from 'react';
import Home from '../Components/Mainpages/Home'
import FlashDeals from '../Components/Mainpages/FlashDeals'
import TopCate from '../Components/Top/TopCate'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import Discount from '../Components/Discount/Discount'
import Phones from '../Components/Phones/Phones'
import Annocument from '../Components/Annocument/Annocument'
import Warpper from '../Components/Warpper/Warpper'

function Pages({products, CartItem, addToCart, shopItems, FavItems, addToFav}) {
   return (
      <>
         <Home/>
         <FlashDeals products={products} addToCart={addToCart} addToFav={addToFav}/>
         <TopCate/>
         <NewArrivals/>
         <Discount/>
         <Phones shopItems={shopItems} addToCart={addToCart} addToFav={addToFav}/>
         <Annocument/>
         <Warpper/>
      </>
   );
}

export default Pages;
