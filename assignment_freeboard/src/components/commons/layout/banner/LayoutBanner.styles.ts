// ----------------------------------------------------------------------------------
//  LayoutBanner.styles
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
  background: linear-gradient(
    95.18deg,
    #6400ff 0.47%,
    #e3d1ff 102.52%,
    #d0b1ff 102.52%
  );
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 1210px;
  height: 320px;
  margin: 20px 20px 20px -5px;
`;

export const SliderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 290px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  img {
    height: 80px;
  }
`;
