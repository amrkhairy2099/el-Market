import React, {useState} from 'react';
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'
import './header-style.css';

function Header({CartItem, addToCart, FavItems}) {
   
   return (
      <>
         <div className="">
            <Head/>
            <Search CartItem={CartItem} FavItems={FavItems}/>
            <Navbar/>
         </div>
      </>
   );
}

export default Header;
