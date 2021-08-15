import Layout from "components/Layout";
import React from "react";
import { ServiceSS } from "./service.style";

const ProductGuidePage = (): JSX.Element => {
  return (
    <Layout>
      <ServiceSS>
        <span>
          <div>제품 사용 가이드</div>
        </span>
        <div>
          제품 착용 방법
          <br />
          <br />
          　　• 제품을 착용하거나 벗을 때에는 항상 제품의 전면부를 두 손으로
          잡고 벗어주세요.
          <br />
          　　• 렌즈를 닦을 때는 렌즈의 주변 프레임을 손으로 감싸고, 안경렌즈
          전용 천으로 부드럽게 닦아주세요. 큰 힘을 가하게 되면 프레임의
          변형이나, 　　 렌즈 표면의 손상을 줄 수 있습니다.
          <br />
          　　• 제품을 착용한 상태로 격렬한 운동은 피해주세요. 부상으로 이어질
          수 있습니다.
        </div>
        <div>
          제품 관리/보관 방법
          <br />
          <br />
          　프레임
          <br />
          　　
          <br />• 아세테이트 소재는 온도에 민감하기 때문에 직사광선에 장시간
          노출되면 변형이 생길 수 있습니다. 차량 보관은 꼭 피해주시고, 서늘한
          곳에 보관해 주세요. 　<br />
          　• 메탈 소재는 유/수분 혹은 염분에 노출된 상태로 오래 방치되면 도금이
          박리될 수 있습니다. 부드러운 마른 수건으로 자주 닦아 관리해 주세요. 　
          <br />
          　• 제품에 선크림, 헤어 스프레이, 손 세정제, 아세톤 등의 화학 물질이
          닿으면 프레임 표면에 손상을 줄 수 있습니다. 오염이 되면 흐르는 물로
          세척 후 마른 수건으로 닦아 　　완전히 건조해 주세요. 　　
          <br />• 렌즈가 삽입되지 않은 상태로 제품을 오랫동안 사용할 경우,
          프레임 모양에 변형이 생길 수 있습니다. 렌즈를 삽입한 상태로 제품을
          사용하시기를 추천합니다. 　<br />
          <br />
          렌즈 　　
          <br />• 도수렌즈 가공은 젠틀몬스터에서 지원하지 않습니다. 가까운
          안경원으로 방문해 주세요. 다만, 일부 선글라스는 도수 렌즈 가공이
          제한될 수 있습니다. 　　자세한 안내가 필요하신 경우 프로덕트
          서비스팀으로 문의해 주세요. (제한 항목 : FLATBA 렌즈, 특수가공렌즈,
          일체형 렌즈 등) 　　
          <br />• 렌즈의 표면이 바닥에 닿지 않도록 보관해주세요. 케이스 보관 시
          렌즈 부분을 안경 전용 천으로 감싼 후 보관하시면 더욱 좋습니다. 　　
          <br />• 렌즈 코팅은 알칼리 성분에 약하기 때문에 비누와 같은 알칼리성
          세제로 세척하는 것은 피하고, 중성 세제를 푼 물에 잠시 담가 두었다가
          흐르는 물에 헹군 후 　　부드러운 천으로 닦아주세요. 　　
          <br />• 렌즈에 심한 흠집이 생기거나 코팅이 손상된 경우에는 시력에 안
          좋은 영향을 줄 수 있으므로 새로운 렌즈로 교체하는 것을 추천합니다. 　
          <br />
          <br />
          제품 설명서 다운로드
          <br />
          　　더 자세한 사항은 다음 링크를 클릭하여 다운로드하고 오프라인
          상태에서도 읽을 수 있습니다.
        </div>
      </ServiceSS>
    </Layout>
  );
};

export default ProductGuidePage;
