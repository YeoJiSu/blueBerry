import React from "react";
import { FooterSS } from "./Footer.style";
import Link from "next/link";

const FooterPresenter = (): JSX.Element => {
  return (
    <>
      <FooterSS>
        <div className={"footer-top"}>
          <div className={"image"}>
            <img className="phoneImage1" alt="icon1" src="icon1.png" />

            <img className="phoneImage2" alt="icon2" src="icon2.png" />
          </div>
          <div className={"num"}>
            <span>010-2542-3650</span>
            <span>duwltn1301@naver.com</span>
          </div>
        </div>
        <div className={"footer-bottom"}>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img src="/man.png" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/man.png" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/man.png" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="bag.png" alt="" />
                  <span>2</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/man.png" alt="" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </FooterSS>
    </>
  );
};
export default FooterPresenter;
