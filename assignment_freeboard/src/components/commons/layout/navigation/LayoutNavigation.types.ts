import { MouseEvent, MouseEventHandler } from "react";

export interface ILayoutNavigationUIProps {
  onClickMoveToBoardNew: MouseEventHandler<HTMLDivElement> | undefined;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}
