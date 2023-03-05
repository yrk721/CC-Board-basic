// ----------------------------------------------------------------------------------
//  LayoutNavigation.styles
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const NavigationWrapper = styled.div`
  width: 255px;
  height: 1010px;
  color: black;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 20px 0px 20px 20px;
`;

export const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px 10px 30px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  cursor: pointer;
  :hover {
    color: #999999;
  }
  img {
    height: 30px;
    margin-right: 10px;
  }
  :hover img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.5;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 30px 0px 30px;
  padding: 50px 0px 20px 0px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: -0.01em;

  cursor: pointer;
  :hover {
    color: #999999;
  }
  img {
    height: 30px;
    margin-right: 10px;
  }
  :hover img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.5;
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 210px;
  margin: 20px 0px 40px 22px;
  background-color: #e5e5e5;
`;
