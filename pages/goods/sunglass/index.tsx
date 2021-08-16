import Layout from "components/Layout";
import React, { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GoodsSS } from "../goods.style";
const SunglassPage = (): JSX.Element => {
  const [sunglass, sunglassList] = useState([]);
  useEffect(() => {
    axios
      .get("https://strapi.kspark.link/sunglasses")
      .then((response: AxiosResponse) => {
        const sunglassNew = response.data; /*
          .filter((value) => {
            if (value.New === true) {
              return true;
            }
          })
          .map((value) => {
            return value;
          });*/
        //console.log("glassNew", glassNew);
        sunglassList(sunglassNew);
      });
  }, []);
  return (
    <Layout>
      <GoodsSS>
        <div className={"title"}>SUNGLASS</div>
        <div className={"goods"}>
          {sunglass.map((value, index) => {
            return (
              <>
                <div className={"goods_img"}>
                  <img
                    src={sunglass[index]?.img_url}
                    alt={sunglass[index]?.goodsName}
                  />
                  <p>{sunglass[index]?.goodsName}</p>
                  <p>{sunglass[index]?.price}원</p>
                </div>
              </>
            );
          })}
        </div>
      </GoodsSS>
    </Layout>
  );
};

export default SunglassPage;
