import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  /* width: 1200px; */
  /* margin: 100px; */
`;

export const CardWrapper = styled.div`
  width: 1100px;
  height: 850px;
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

export const IconWrapper = styled.div`
  text-align: center;
`;

export const LikeWrapper = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #6400ff;
  margin: 0px 20px;
  cursor: pointer;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #6400ff;
  margin-top: 10px;
`;

export const DislikeCount = styled.div`
  color: #828282;
  margin-top: 10px;
`;
