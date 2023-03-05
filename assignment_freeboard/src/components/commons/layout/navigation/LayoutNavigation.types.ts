// ----------------------------------------------------------------------------------
//  LayoutNavigation.types
// ----------------------------------------------------------------------------------

import { MouseEvent, MouseEventHandler } from "react";

export interface ILayoutNavigationUIProps {
  onClickMoveToBoardNew: MouseEventHandler<HTMLDivElement> | undefined;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}
