import React from "react";
import data from "../data/category";

function Categories() {
   return (
      <>
         <div className="category">
            {data.map((value, index) => {
               return (
                  <div className="box f-flex" key={index}>
                     <img src={value.img} alt={value.name} />
                     <span>{value.name}</span>
                  </div>
               );
            })}
         </div>
      </>
   );
}

export default Categories;