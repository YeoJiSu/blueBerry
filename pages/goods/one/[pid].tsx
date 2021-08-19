import Layout from "components/Layout";
import React from "react";
import { OneSS } from "./one.style";
import { useRouter } from "next/router";

//장바구니랑 좋아요 한 데이터 어떻게 넘기지??
//체크 박스 선택하면 데이터 넘겨야해 음 ....
const OnePage = (): JSX.Element => {
  const router = useRouter();
  const { pid } = router.query;
  const data = router.query;
  console.log("나타나라:", data);

  const like = () => {
    alert("❤️🧡💛💚💙💜");
  };
  const bag = (value: any) => {
    if (value === "품절") alert("죄송합니다. 품절 상품 입니다🥺🥺");
  };
  const buy = (value: any) => {
    if (value === "품절") alert("죄송합니다. 품절 상품 입니다🥺🥺");
  };
  const isCustom = (value: any) => {
    if (value.IsCustom == "custom") alert("custom ㅇㅣ 마자용");
    else alert("커스텀 아닌데?");
  };
  return (
    <Layout>
      <OneSS>
        <div className={"title"}></div>
        <div className={"item"}>
          <div className={"itemImage"}>
            <img src={data.img_url} width="400px" alt="" />
          </div>
          <div className={"itemIndex"}>
            <p>상품 이름 : {data.goodsName}</p>
            <p>가격: {data.price}</p>

            <div className={"buy"}>
              <span>
                <p onClick={() => like()}>좋아요</p>
              </span>
              <span>
                <p onClick={() => bag(data.IsSoldout)}>장바구니</p>
                {/*품절 되면 품절로 */}
              </span>
              <span>
                <p onClick={() => buy(data.IsSoldout)}>구매하기</p>
                {/*품절 되면 품절로 */}
              </span>
              <span>
                <p onClick={() => isCustom(data)}>커스텀이니?</p>
              </span>
            </div>
          </div>
        </div>
      </OneSS>
    </Layout>
  );
};

export default OnePage;
