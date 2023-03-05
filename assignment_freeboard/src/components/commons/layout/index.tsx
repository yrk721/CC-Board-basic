// ----------------------------------------------------------------------------------
//  Layout
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import { ILayoutProps } from "./banner/LayoutBanner.types";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenBanner =
    router.pathname === "/boards/new" ||
    router.pathname === "/boards/[boardId]/edit";

  return (
    <>
      <Body>
        <div style={{ width: "20%" }}>
          <LayoutNavigation />
        </div>
        <div style={{ width: "80%" }}>
          {!isHiddenBanner && <LayoutBanner />}
          {props.children}
        </div>
      </Body>
    </>
  );
}
