// ----------------------------------------------------------------------------------
//  LayoutNavigation.presenter
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router";
import {
  NavigationWrapper,
  NavigationItem,
  LogoBox,
  Line,
} from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  const router = useRouter();

  const onClickMoveHome = () => {
    void router.push("/");
  };

  return (
    <NavigationWrapper>
      <LogoBox onClick={onClickMoveHome}>
        <img src="/images/banner/logoIcon.png" />
        <div>TALKER</div>
      </LogoBox>
      <Line />
      <NavigationItem onClick={props.onClickMoveToBoardDetail}>
        <img src="/images/banner/listIcon.png" />
        <div>전체 글 보기</div>
      </NavigationItem>
      <NavigationItem>
        <img src="/images/banner/addIcon.png" />
        <div onClick={props.onClickMoveToBoardNew}>새 글 작성</div>
      </NavigationItem>
    </NavigationWrapper>
  );
}
