// ----------------------------------------------------------------------------------
//  게시물 목록 컴포넌트 style - BoardList.styles
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  width: 1210px;
  height: 670px;
  margin-bottom: 100px;
  margin-left: -10px;
  border-radius: 5px;
  overflow: auto;
  /* border: 2px solid grey; */
  /* background-color: aliceblue; */
`;

export const BoardListItemWrapper = styled.div`
  width: 1210px;
  padding: 10px;
  /* background-color: aliceblue; */
`;

export const BoardListItem = styled.div`
  display: flex;
  align-items: center;
  width: 1185px;
  height: 50px;
  margin-bottom: 17px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  /* background-color: red; */
`;

export const ColumnBasic = styled.div`
  width: 25%;
  text-align: end;
  color: #999999;
  /* background-color: aqua; */
`;

export const ColumnTitle = styled.div`
  width: 70%;
  margin-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: start;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #333333;
  cursor: pointer;
  :hover {
    color: #6400ff;
  }
  /* background-color: yellow; */
`;
