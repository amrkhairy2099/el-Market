import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Pages from './Pages/Pages';
import Cart from './Components/Header/Cart';
import User from './Components/Header/User';
import Favourite from './Components/Header/Favourite';
import Footer from './Components/Footer/Footer';
import productData from './Components/data/productData';
import MobileData from './Components/Phones/MobileData';
import './App.css';

function App() {
   
   const { products } = productData;
   const { shopItems } = MobileData;

   const [CartItem, setCartItem] = useState([]);
   const [FavItems, setFavItems] = useState([]);
   
   const addToCart = (product) => {
      const productExit = CartItem.find((item) => item.id === product.id);
     
      if (productExit) {
         setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
      } else {
         setCartItem([ ...CartItem, { ...product, qty: 1}])
      }
   }
   
   const decreaseQty = (product) => {
      const productExit = CartItem.find((item) => item.id === product.id)
      if(productExit.qty === 1) {
         setCartItem(CartItem.filter((item) => item.id !== product.id))
      } else {
         setCartItem(CartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty - 1} : item)))
      }
   }
   
   const removeProduct = (product) => {
      const productExit = CartItem.find((item) => item.id === product.id)
      if (product.id === product.id) {
         setCartItem(CartItem.filter((item) => item.id !== product.id))
      } else {
         return
      }
   }
   
   const addToFav = (product) => {
      const productExit = FavItems.find((item) => item.id === product.id);
      if(productExit) {
         setFavItems(FavItems.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item)));
      } else {
         setFavItems([...FavItems, {...product, qty: 1}])
      }
   }
   
   const delFavItem = (product) => {
      const productExit = FavItems.find((item) => item.id === product.id)
      if (product.id === product.id) {
         setFavItems(FavItems.filter((item) => item.id !== product.id));
      } else {
         return
      }
   }
   
   return (
      <>
         <Header CartItem={CartItem} FavItems={FavItems}/>
         <Routes>
            <Route path='/' element={ <Pages products={products} addToCart={addToCart} shopItems={shopItems} addToFav={addToFav} delFavItem={delFavItem}/>}/>
            <Route path='/cart' element={ <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeProduct={removeProduct}/>} />
            <Route path='/user' element={ <User/>} />
            <Route path='/favourite' element={ <Favourite FavItems={FavItems} addToFav={addToFav} delFavItem={delFavItem}/>} />
         </Routes>
         <Footer/>
      </>
   );
}

export default App;
