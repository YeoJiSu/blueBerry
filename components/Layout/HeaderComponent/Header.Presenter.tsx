import React from "react";
import { HeaderSS } from "@/components/Layout/HeaderComponent/Header.style";

import LoginStateComponent from "@/components/_Common/Login/LoginStateComponent";
import Link from "next/link";

interface HeaderPresenterProps {
  isLoggedIn: boolean;
  isUserData?: any;
}
const HeaderPresenter = ({
  isLoggedIn,
  isUserData,
}: HeaderPresenterProps): JSX.Element => {
  isLoggedIn = true;
  return (
    <>
      <HeaderSS isLoggedIn={isLoggedIn}>
        <div className={"header-top"}>
          <div className={"logo"}>
            <Link href="/">
              <a>
                <img src={"/logo.png"} alt="" />
              </a>
            </Link>
          </div>

          <div className={"header-login"}>
            <LoginStateComponent
              isLoggedIn={isLoggedIn}
              isUserData={isUserData}
            />
          </div>
          <div className={"pages"}>
            <ul>
              <li>
                <Link href="/goods/glass">
                  <a>안경</a>
                </Link>
              </li>
              <li>
                <Link href="/goods/sunglass">
                  <a>선글라스</a>
                </Link>
              </li>
              <li>
                <Link href="/goods/best">
                  <a>BEST</a>
                </Link>
              </li>
              <li>
                <Link href="/goods/new">
                  <a>NEW</a>
                </Link>
              </li>
              <li>
                <Link href="/help/abouts">
                  <a>매장보기</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={"description"}>
          <img src={"/menu.png"} alt="" />
        </div>
        <div className="reserve">
          <p>
            <span>빠른예약 gogo</span>
          </p>
        </div>
      </HeaderSS>
    </>
  );
};

export default HeaderPresenter;
