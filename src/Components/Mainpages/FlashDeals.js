import FlashCard from './FlashCard'

function FlashDeals({products, addToCart, addToFav}) {

   return (
      <>
         <section className="flash background">
            <div className="container">
               <div className="heading f-flex">
                  <i className="fa fa-bolt"></i>
                  <h1>Flash Deals</h1>
               </div>
               <FlashCard products={products} addToCart={addToCart} addToFav={addToFav}/>
            </div>
         </section>
      </>
   );
}

export default FlashDeals;