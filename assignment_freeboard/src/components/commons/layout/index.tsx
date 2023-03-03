// ----------------------------------------------------------------------------------
// Layout
// ----------------------------------------------------------------------------------

// import { useRouter } from "next/router";
// import styled from "@emotion/styled";
// import LayoutBanner from "./banner/LayoutBanner.container";
// import LayoutNavigation from "./navigation/LayoutNavigation.container";

// const Body = styled.div`
//   height: 500px;
//   display: flex;
// `;

// const NavWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 30%;
// `;

// const BannerWrapper = styled.div`
//   margin-left: 30%;
//   width: 70%;
// `;

// // const HIDDEN_BANNERS = ["/12-02-library-star/01"];
// const HIDDEN_BANNERS = ["/boards/new"];

// interface ILayoutProps {
//   children: JSX.Element;
// }
// export default function Layout(props: ILayoutProps) {
//   const router = useRouter();
//   console.log(router.asPath);

//   const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

//   //   return (
//   //     <>
//   //       {/* {!isHiddenBanner && <LayoutBanner />} */}
//   //       <Body>
//   //         <div style={{ width: "30%" }}>
//   //           <LayoutNavigation />
//   //         </div>
//   //         <div style={{ width: "70%" }}>
//   //           <LayoutBanner />
//   //         </div>
//   //         <div style={{ width: "100%" }}>{props.children}</div>
//   //       </Body>
//   //       {/* <div style={{ height: "500px", display: "flex" }}>
//   //           <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
//   //           <div style={{ width: "70%" }}>{props.children}</div>
//   //         </div> */}
//   //       {/* <Body>{props.children}</Body> */}
//   //     </>
//   //   );
//   // }

//   return (
//     <>
//       {!isHiddenBanner && <LayoutBanner />}
//       <Body>
//         <NavWrapper>
//           <LayoutNavigation />
//           <LayoutBanner />
//         </NavWrapper>
//         <BannerWrapper>
//           <LayoutBanner />
//           <div>{props.children}</div>
//         </BannerWrapper>
//       </Body>
//     </>
//   );
// }

// --------
// import { useRouter } from "next/router";
// import styled from "@emotion/styled";
// import LayoutBanner from "./banner/LayoutBanner.container";
// import LayoutNavigation from "./navigation/LayoutNavigation.container";

// const Body = styled.div`
//   display: flex;
// `;

// // const HIDDEN_BANNERS = ["/boards/new", "/boards/edit"];
// const HIDDEN_BANNERS = ["/boards/new", /^\/boards\/[\w-]+(\/edit)?$/];

// interface ILayoutProps {
//   children: JSX.Element;
// }

// export default function Layout(props: ILayoutProps) {
//   const router = useRouter();
//   // const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
//   const isHiddenBanner = HIDDEN_BANNERS.includes(router.pathname);

//   return (
//     <>
//       <Body>
//         <div style={{ width: "20%" }}>
//           <LayoutNavigation />
//         </div>
//         <div style={{ width: "80%" }}>
//           {!isHiddenBanner && <LayoutBanner />}
//           {props.children}
//         </div>
//       </Body>
//     </>
//   );
// }

// -----
// import { useRouter } from "next/router";
// import styled from "@emotion/styled";
// import LayoutBanner from "./banner/LayoutBanner.container";
// import LayoutNavigation from "./navigation/LayoutNavigation.container";

// const Body = styled.div`
//   display: flex;
// `;

// const HIDDEN_BANNERS = [
//   "/boards/new",
//   "/boards/[boards]",
//   "/boards/[boards]/edit",
// ];

// interface ILayoutProps {
//   children: JSX.Element;
// }

// export default function Layout(props: ILayoutProps) {
//   const router = useRouter();

//   // 동적 라우팅 경로를 숨기기 위해 배열에 추가
//   const hiddenDynamicPaths = HIDDEN_BANNERS.filter(
//     (path) => typeof path === "string" && path.includes("[")
//   );

//   // 현재 경로와 동적 라우팅 경로 모두를 검사
//   const isHiddenBanner = HIDDEN_BANNERS.some(
//     (path) =>
//       path === router.pathname ||
//       hiddenDynamicPaths.some((dynamicPath) =>
//         router.pathname.includes(dynamicPath.replace("[", "").replace("]", ""))
//       )
//   );

//   return (
//     <>
//       <Body>
//         <div style={{ width: "20%" }}>
//           <LayoutNavigation />
//         </div>
//         <div style={{ width: "80%" }}>
//           {!isHiddenBanner && <LayoutBanner />}
//           {props.children}
//         </div>
//       </Body>
//     </>
//   );
// }

// -----------------

import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

const Body = styled.div`
  display: flex;
`;

const HIDDEN_BANNERS = ["/boards/new"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner =
    HIDDEN_BANNERS.includes(router.pathname) ||
    (router.pathname.startsWith("/boards/") &&
      router.pathname !== "/boards/new");

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
