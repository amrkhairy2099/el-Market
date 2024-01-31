import dataSlider from '../data/dataSlider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderCard() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      appendDotos: (dots) => {
         return <ul>{dots}</ul>
      },
   }
   
   return (
      <>
      <Slider {...settings}>
         {dataSlider.map((item, index) => {
            return(
               <div className="box d-flex top" key={index}>
                  <div className="left">
                     <h1>{item.title}</h1>
                     <p>{item.desc}</p>
                     <button className="btn btn-primary">Visit Collections</button>
                  </div>
                  <div className="right">
                     <img src={item.cover} alt="" />
                  </div>
               </div>
            )
         })}
      </Slider>
      </>
   );
}

export default SliderCard;