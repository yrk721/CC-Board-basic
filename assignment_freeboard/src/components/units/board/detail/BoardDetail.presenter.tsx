// ----------------------------------------------------------------------------------
//  게시물 상세 컴포넌트 UI - BoardDetail.presenter
// ----------------------------------------------------------------------------------

import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.CreatedAt>
            {getDate(props.data?.fetchBoard?.createdAt)}
          </S.CreatedAt>
        </S.Header>

        <S.ImageWrapper>
          <img src="/images/list/list01.png" />
          <img src="/images/list/list02.png" />
          <img src="/images/list/list03.png" />
        </S.ImageWrapper>

        <S.ContentsWrapper>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
          </S.AvatarWrapper>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.ContentsWrapper>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>글목록</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정</S.Button>
        <S.Button>삭제</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
