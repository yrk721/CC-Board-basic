// ----------------------------------------------------------------------------------
//  게시물 작성 컴포넌트 style - BoardWrite.styles
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  width: 1100px;
  height: 880px;
  margin: 20px 20px 20px 0px;
  padding: 0px 50px 50px 50px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 20px 30px 15px 12px;
  padding: 50px 0px 20px 0px;
`;

export const StLine = styled.div`
  height: 1px;
  width: 980px;
  margin-left: 20px;
  margin: 25px 10px 0px 10px;
  background-color: #6400ff;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

export const ContentsLabel = styled.div`
  margin-bottom: 270px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  font-size: 16px;
  font-weight: 500;
`;

export const Subject = styled.input`
  width: 900px;
  height: 40px;
  margin-left: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const Contents = styled.textarea`
  width: 900px;
  height: 300px;
  margin-left: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 1000px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border: 1px dashed #e5e5e5;
  border-radius: 5px;
  margin: 0px 0px 0px 45px;
  cursor: pointer;
  img {
    height: 25px;
  }
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
`;

export const Writer = styled.input`
  width: 400px;
  height: 40px;
  margin-left: 45px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const Password = styled.input`
  width: 400px;
  height: 40px;
  margin-left: 20px;
  margin-right: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;

  margin: 65px 10px 20px 10px;
  padding: 5px 20px;
  color: white;
  background-color: #999999;
  cursor: pointer;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#6400ff" : "none"};
`;

export const CancelButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  margin: 65px 10px 20px 10px;
  padding: 5px 20px;
  color: white;
  background-color: #999999;
  cursor: pointer;
  :hover {
    background-color: #595959;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  width: 1000px;
`;

export const Error = styled.div`
  width: 400px;
  padding-top: 10px;
  font-size: 14px;
  margin-left: 95px;
  color: red;
`;
