import Layout from "components/Layout";
import React from "react";
import { ServiceSS } from "./service.style";

const ShippingPage = (): JSX.Element => {
  return (
    <Layout>
      <ServiceSS>
        <span>
          <div>배송</div>
        </span>

        <div>
          주문 상황 조회
          <ul>
            <li>
              주문하신 상품의 진행 상황은 공식 홈페이지 내 [ACCOUNT] -
              [주문조회] 에서 확인하실 수 있습니다.
            </li>
            　
            <li>
              결제가 완료되지 않은 주문 내역은 3일 후 자동으로 취소됩니다.
            </li>
          </ul>
        </div>
        <div>
          배송 현황 　 <br />
          <ul>
            <li>
              결제가 완료되면 평일 기준 24시간 내 문자 메시지로 송장 번호가
              전송됩니다. 안내 받으신 송장번호는 당일 오후 7시 이후부터 배송
              조회가 가능합니다. 　　
            </li>
          </ul>
          <ul>
            <li> CJ대한통운 ( https://www.cjlogistics.com ) </li>　　
            <li>
              기프트 카드 - 우체국 등기 배송 ( https://service.epost.go.kr )
            </li>
          </ul>
        </div>
        <div>
          배송 국가 및 소요 시간 　<br />
          <ul>
            <li>GENTLE MONSTER는 전세계적으로 배송이 가능합니다.</li> 　
            <li>
              국내 배송의 경우 평균 1~3일 정도 소요됩니다. 단, 지역 운송사
              사정에 따라 다소 차이가 있을 수 있습니다.
            </li>
          </ul>
        </div>
        <div>
          배송 비용 <br />
          <ul>
            <li>배송 비용은 GENTLE MONSTER가 모든 고객님께 제공해 드립니다.</li>
          </ul>
        </div>
        <div>
          {" "}
          배송지 변경 <br />
          <ul>
            <li>
              1600-2126 또는 cs@gentlemonster.com으로 연락 주시기 바랍니다. 단,
              이미 상품이 발송된 경우 변경이 어렵습니다.
            </li>
          </ul>
        </div>
      </ServiceSS>
    </Layout>
  );
};

export default ShippingPage;
