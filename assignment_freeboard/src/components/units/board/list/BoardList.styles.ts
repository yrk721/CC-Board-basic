// ----------------------------------------------------------------------------------
//  게시물 목록 컴포넌트 style - BoardList.styles
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1190px;
  padding: 5px 0px 10px 0px;
  /* background-color: aliceblue; */
`;

export const BoardListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1190px;
  height: 50px;
  margin-bottom: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);
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
  /* background-color: yellow; */
  margin-left: 30px;
  width: 70%;
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
    color: 6400ff;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1190px;
  padding-top: 20px;
  background-color: green;
`;

// export const Button = styled.button`
//   width: 171px;
//   height: 52px;
//   background-color: white;
//   border-radius: 15px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
//   cursor: pointer;

//   :hover {
//     background-color: #f5f2fc;
//   }
// `;
