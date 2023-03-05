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
  height: 500px;
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
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div`
  margin-top: 5px;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1100px;
  padding-top: 55px;
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
