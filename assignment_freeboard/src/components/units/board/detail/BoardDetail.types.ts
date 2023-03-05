// ----------------------------------------------------------------------------------
//  게시물 상세 컴포넌트 type - BoardDetail.types
// ----------------------------------------------------------------------------------

import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
