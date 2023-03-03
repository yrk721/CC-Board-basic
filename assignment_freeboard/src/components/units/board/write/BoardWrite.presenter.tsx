import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시물 수정" : "새 글 작성"}</S.Title>
        <S.StLine />
        <S.InputWrapper>
          <span>제목</span>
          <S.Subject
            type="text"
            placeholder=" 제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.ContentsLabel>내용</S.ContentsLabel>
          <S.Contents
            placeholder=" 내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.InputWrapper>

        <S.ImageWrapper>
          <S.Label>이미지</S.Label>
          <S.UploadButton>
            <img src="/images/plus.png" />
          </S.UploadButton>
          <S.UploadButton>
            <img src="/images/plus.png" />
          </S.UploadButton>
          <S.UploadButton>
            <img src="/images/plus.png" />
          </S.UploadButton>
        </S.ImageWrapper>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder=" 이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder=" 비밀번호를 작성해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}
          </S.SubmitButton>
          <S.CancelButton>취소</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
