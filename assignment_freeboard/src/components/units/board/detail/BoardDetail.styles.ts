// ----------------------------------------------------------------------------------
//  게시물 상세 컴포넌트 style - BoardDetail.styles
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 1200px; */
  /* margin: 100px; */
`;

export const CardWrapper = styled.div`
  width: 1190px;
  height: 550px;
  margin: 20px 20px 0px 0px;
  padding: 0px 50px 50px 50px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;

  /* background-color: orange; */
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
  height: 215px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 15%;

  /* background-color: skyblue; */
`;

export const Avatar = styled.img`
  margin-right: 10px;
  height: 20px;
`;

export const Writer = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const CreatedAt = styled.div`
  padding-top: 40px;
  justify-content: end;
  margin-right: 10px;
  color: #909090;
`;

export const Title = styled.h1`
  padding-top: 40px;
  padding-bottom: 10px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 550;
  font-size: 22px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #333333;

  /* background-color: lightpink; */
`;

export const Contents = styled.div`
  width: 85%;
  height: 160px;
  overflow: scroll;
  /* background-color: lightgreen; */

  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #333333;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1190px;
  padding-top: 50px;
  padding-bottom: 30px;

  /* background-color: aquamarine; */
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  margin: 0px 10px 20px 10px;
  padding: 10px 10px;
  color: white;
  background-color: #999999;
  cursor: pointer;
  :hover {
    background-color: #6400ff;
    border-color: white;
  }
`;
