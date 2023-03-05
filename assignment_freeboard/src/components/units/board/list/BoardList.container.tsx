// ----------------------------------------------------------------------------------
//  게시물 목록 컴포넌트 로직 - BoardList.container
// ----------------------------------------------------------------------------------

import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  // const [deleteBoard] = useMutation(DELETE_BOARD);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const onClickMoveToBoardNew = () => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  // const onClickDelete = async (event) => {
  //   await deleteBoard({
  //     variables: {
  //       // event.target.id 는 html 코드에서 가져온 것이기 때문에 항상 string이다.
  //       // 따라서 숫자로 형변환해준다.
  //       number: Number(event.target.id),
  //     },
  //     // refetchQueries fetch 했던 것을 다시 fetch한다. (리프레시한 효과)
  //     refetchQueries: [{ query: FETCH_BOARDS }],
  //     // 따라서 삭제버튼을 누르면, 백엔드로 삭제 mutation, 재조회 query 총 두 번의 요청이 간다.
  //   });
  // };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      onLoadMore={onLoadMore}
    />
  );
}
