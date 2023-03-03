import styled from "@emotion/styled";

export const NavigationWrapper = styled.div`
  width: 250px;
  height: 1000px;
  color: black;
  background-color: #ffffff;
  /* background-color: yellowgreen; */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 20px 10px 20px 15px;
`;

export const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 30px 10px 30px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  cursor: pointer;
  :hover {
    color: gray;
  }
  img {
    height: 30px;
    margin-right: 10px;
    /* object-fit: contain; */
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
    color: gray;
  }
  img {
    height: 30px;
    margin-right: 10px;
    /* object-fit: contain; */
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 210px;
  margin-left: 20px;
  margin: 20px 0px 40px 20px;
  background-color: #e5e5e5;
`;
