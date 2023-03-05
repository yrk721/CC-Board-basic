// ----------------------------------------------------------------------------------
//  게시물 목록 컴포넌트 UI - BoardList.presenter
// ----------------------------------------------------------------------------------

import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { getDate } from "../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <S.ListWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.BoardListItemWrapper>
            {props.data?.fetchBoards.map((el, index) => (
              <S.BoardListItem key={el._id}>
                <S.ColumnTitle
                  id={el._id}
                  onClick={props.onClickMoveToBoardDetail}
                >
                  {el.title}
                </S.ColumnTitle>
                <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
              </S.BoardListItem>
            ))}
          </S.BoardListItemWrapper>
        </InfiniteScroll>
      </S.ListWrapper>
    </>
  );
}
