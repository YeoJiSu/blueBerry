import Layout from "components/Layout";
import React, { useCallback, useEffect, useState } from "react";
import { GoodsSS } from "../goods.style";
import axios, { AxiosResponse } from "axios";

const NewPage = (): JSX.Element => {
  const [glass, glassList] = useState([]);
  useEffect(() => {
    axios
      .get("https://strapi.kspark.link/glasses")
      .then((response: AxiosResponse) => {
        const glassNew = response.data
          .filter((value) => {
            if (value.New === true) {
              return true;
            }
          })
          .map((value) => {
            return value;
          });
        //console.log("glassNew", glassNew);
        glassList(glassNew);
      });
  }, []);
  const [sunglass, sunglassList] = useState([]);
  useEffect(() => {
    axios
      .get("https://strapi.kspark.link/sunglasses")
      .then((response: AxiosResponse) => {
        const sunglassNew = response.data
          .filter((value) => {
            if (value.New === true) {
              return true;
            }
          })
          .map((value) => {
            return value;
          });
        //console.log("glassNew", glassNew);
        sunglassList(sunglassNew);
      });
  }, []);

  return (
    <Layout>
      <GoodsSS>
        <div className={"title"}>NEW</div>
        <div className={"goods"}>
          {glass.map((value, index) => {
            return (
              <>
                <div className={"goods_img"}>
                  <img
                    src={glass[index]?.img_url}
                    alt={glass[index]?.goodsName}
                  />
                  <p>{glass[index]?.goodsName}</p>
                  <p>{glass[index]?.price}원</p>
                </div>
              </>
            );
          })}

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

export default NewPage;
