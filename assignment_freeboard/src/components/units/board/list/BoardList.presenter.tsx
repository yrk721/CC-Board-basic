// ----------------------------------------------------------------------------------
//  게시물 목록 컴포넌트 UI - BoardList.presenter
// ----------------------------------------------------------------------------------

import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <S.Wrapper>
        {props.data?.fetchBoards.map((el, index) => (
          <S.BoardListItem key={el._id}>
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </S.ColumnTitle>

            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.BoardListItem>
        ))}
      </S.Wrapper>
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count} />
      </S.Footer>
    </>
  );
}
