// ----------------------------------------------------------------------------------
//  LayoutBanner.presenter
// ----------------------------------------------------------------------------------

import { CarouselWrapper, SliderItem } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        <div>
          <SliderItem>
            <p>Carousel</p>
            <img src="/images/rocket.png" />
          </SliderItem>
        </div>
        <div>
          <SliderItem>
            <p>Carousel</p>
            <img src="/images/rocket.png" />
          </SliderItem>
        </div>
        <div>
          <SliderItem>
            <p>Carousel</p>
            <img src="/images/rocket.png" />
          </SliderItem>
        </div>
      </Slider>
    </CarouselWrapper>
  );
}
