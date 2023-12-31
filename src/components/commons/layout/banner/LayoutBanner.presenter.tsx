import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        <div>
          <S.SliderItem src="/images/layout/morning2.png" />
        </div>
        <div>
          <S.SliderItem src="/images/layout/page1.png" />
        </div>
        <div>
          <S.SliderItem src="/images/layout/page2.png" />
        </div>
      </Slider>
    </S.Wrapper>
  );
}
