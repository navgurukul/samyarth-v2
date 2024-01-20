import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/partners';

const PartnersSlider = () => {
  return (
    <>
    {/* partners */}
    <div className="mil-soft-bg"  >
        <div className="container mil-p-0-120"  >
            <Swiper
                {...SliderProps.milInfiniteSlider}
                className="swiper-container mil-infinite-show mil-up"
               
              
            >
                {Data.items.map((item, key) => (
                <SwiperSlide  className="swiper-slide" key={`partners-slider-item-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame" >
                    <img style={{
                        width:"200px", height:"35px", 
                        "@media (max-width: 768px)": {
                            width:"150px", height:"30px",
                        }
                    }} src={item.image} alt={item.alt} />
                </a>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
    {/* partners end */}
    </>
  );
};
export default PartnersSlider;