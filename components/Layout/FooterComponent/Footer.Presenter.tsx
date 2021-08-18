import React from "react";
import { FooterSS } from "./Footer.style";
import Link from "next/link";

const FooterPresenter = (): JSX.Element => {
  return (
    <>
      <FooterSS>
        <div className={"footer-top"}>
          <div className={"service"}>
            <p>고객서비스</p>
            <Link href="/service/contact">
              <a>
                <p>문의</p>
              </a>
            </Link>
            <Link href="/service/shipping">
              <a>
                <p>배송</p>
              </a>
            </Link>
            <Link href="/service/return">
              <a>
                <p>교환 및 반품</p>
              </a>
            </Link>
            <Link href="/service/orderInquiry">
              <a>
                <p>주문 조회</p>
              </a>
            </Link>
            <Link href="/service/faq">
              <a>
                <p>수리 서비스 가이드</p>
              </a>
            </Link>
            <Link href="/service/productGuide">
              <a>
                <p>제품 사용 가이드</p>
              </a>
            </Link>
          </div>
          <div className={"privacy"}>
            <p>법적고지</p>
            <Link href="/service/terms">
              <a>
                <p>이용약관</p>
              </a>
            </Link>
            <Link href="/service/privacy">
              <a>
                <p>개인정보 처리방침</p>
              </a>
            </Link>
          </div>
          <div className={"look"}>
            <p>블루베리를 만나보세요</p>
            <p>
              <Link href="https://www.instagram.com/blueberry0999/">
                <a>
                  <img src="/instagram.png" width="25px" alt="" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/bbglasses/">
                <a>
                  <img src="/facebook.png" width="25px" alt="" />
                </a>
              </Link>
              <Link href="https://twitter.com/bbeglasses">
                <a>
                  <img src="/twitter.png" width="25px" alt="" />
                </a>
              </Link>
            </p>
          </div>
        </div>

        <div className={"footer-middle"}>
          <span>
            <p>© 2021 BLUEBERRY</p>
          </span>
          <span>
            <p>
              주소 : 서울특별시 강북구 도봉로 352 (번동) 효성네오인텔리안 308호
              <br />
              대표 : 한지연 대표전화 : 02-6229-6008
              <br />
              사업자등록번호 :644-81-01322
              <br />
              통신판매업 신고 : 2019-서울강북-0693
              <br />
              개인정보관리책임 : 이지원
            </p>
          </span>
        </div>
        <div className={"footer-bottom"}>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img src="/home.png" width="25px" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/question.png" width="25px" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/heart.png" width="25px" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/bag.png" width="20px" alt="" />
                  <span>2</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/man.png" width="20px" alt="" />
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
