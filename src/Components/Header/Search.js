import {Link} from 'react-router-dom'
import logo from '../assets/logo-2.png'

function Search ({CartItem, FavItems, delFavItem}) {
   
   window.addEventListener("scroll", function () {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 50)
   })
   
   return (
      <>
         <section className="search">
            <div className="container center">
               <div className="logo width">
                  <img src={logo} alt="logo" />
               </div>
               <div className="search-box center">
                  <i className="fa fa-search"></i>
                  <input type="text" placeholder='Search and hit anter ...' />
                  <span>All Category</span>
               </div>
               <div className="icon f-flex width">
                  <div className="links d-flex">
                     <div className="cart"> 
                        <Link to='/cart'>
                           <i className="fas fa-shopping-bag icon-circle"></i>
                           <span className={CartItem.length === 0 ? '' : "added"}>{CartItem.length === 0 ? "" : CartItem.length}</span>
                        </Link>
                     </div>
                     <div className="user"> 
                        <Link to='/user'>
                           <i className="fa fa-user icon-circle"></i>
                        </Link>
                     </div>
                     <div className="favourite">
                        <Link to='/favourite'>
                           <i className="fa fa-heart icon-circle"></i>
                           <span className={FavItems.length === 0 ? '' : "added"}>{FavItems.length === 0 ? "" : FavItems.length}</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Search;
